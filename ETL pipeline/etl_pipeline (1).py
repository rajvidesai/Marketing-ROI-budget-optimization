import pandas as pd
import numpy as np
import os
import json
from datetime import datetime

# --- CONFIGURATION ---
RAW_DATA_DIR = os.path.join("raw_data", "Marketing ROI & Budget Reallocation (Attribution + Regression)")
PROCESSED_DATA_DIR = "data"

def load_data():
    """
    Loads all raw datasets from the specified directory.
    Includes basic error handling for missing files.
    """
    print(">>> Stage 1: Loading Data...")
    datasets = {}
    files = {
        "users": "users.csv",
        "campaigns": "campaigns.csv",
        "ad_spend": "ad_spend_daily.csv",
        "sessions": "sessions.csv",
        "orders": "orders.csv",
        "order_items": "order_items.csv",
        "products": "products.json"
    }

    for key, filename in files.items():
        path = os.path.join(RAW_DATA_DIR, filename)
        try:
            if filename.endswith(".csv"):
                datasets[key] = pd.read_csv(path)
            elif filename.endswith(".json"):
                with open(path, 'r') as f:
                    datasets[key] = pd.DataFrame(json.load(f))
            print(f" Successfully loaded {filename}")
        except FileNotFoundError:
            print(f" Error: File {filename} not found at {path}")
            raise
        except Exception as e:
            print(f" Error loading {filename}: {e}")
            raise
    
    return datasets

def clean_data(datasets):
    """
    Standardizes data: date conversion, casing, missing values, and duplicates.
    """
    print("\n>>> Stage 2: Cleaning and Standardizing Data...")
    
    # 1. Date Conversions
    datasets['users']['signup_date'] = pd.to_datetime(datasets['users']['signup_date'])
    datasets['sessions']['session_ts'] = pd.to_datetime(datasets['sessions']['session_ts'])
    datasets['orders']['order_ts'] = pd.to_datetime(datasets['orders']['order_ts'])
    datasets['ad_spend']['date'] = pd.to_datetime(datasets['ad_spend']['date'])
    
    # 2. Normalize Channel Casing
    for df_name in ['sessions', 'ad_spend', 'campaigns']:
        if 'channel' in datasets[df_name].columns:
            datasets[df_name]['channel'] = datasets[df_name]['channel'].str.lower().str.strip()
    
    # 3. Handle Missing Values
    # Fill missing spend/clicks/impressions with 0
    datasets['ad_spend']['spend'] = datasets['ad_spend']['spend'].fillna(0)
    datasets['ad_spend']['clicks'] = datasets['ad_spend']['clicks'].fillna(0)
    datasets['ad_spend']['impressions'] = datasets['ad_spend']['impressions'].fillna(0)
    
    # 4. Handle Duplicates
    datasets['sessions'] = datasets['sessions'].drop_duplicates(subset=['session_id'])
    datasets['orders'] = datasets['orders'].drop_duplicates(subset=['order_id'])
    
    print(" Data cleaning complete.")
    return datasets

def handle_revenue_outliers(df, column='revenue'):
    """
    Caps outliers in the specified column using the IQR method.
    Calculates IQR based on non-zero values to avoid bias from low conversion.
    """
    revenue_series = df[df[column] > 0][column]
    if revenue_series.empty:
        return df
        
    Q1 = revenue_series.quantile(0.25)
    Q3 = revenue_series.quantile(0.75)
    IQR = Q3 - Q1
    lower_bound = Q1 - 1.5 * IQR
    upper_bound = Q3 + 1.5 * IQR
    
    # Capping (only applied to values > 0)
    df.loc[df[column] > 0, column] = df.loc[df[column] > 0, column].clip(lower=lower_bound, upper=upper_bound)
    return df

def create_fact_sessions(datasets):
    """
    Creates fact_sessions by joining sessions with orders (Last-Touch Attribution).
    Adds derived features like purchase_flag and is_new_user.
    """
    print("\n>>> Stage 3: Creating fact_sessions and applying Attribution...")
    
    sessions = datasets['sessions']
    orders = datasets['orders']
    users = datasets['users']
    
    # Join sessions with orders (Left Join for Attribution)
    # Each order is tied to a session_id in our dataset
    fact_sessions = sessions.merge(
        orders[['order_id', 'session_id', 'net_amount']], 
        on='session_id', 
        how='left'
    )
    
    # Fill missing revenue and create purchase flag
    fact_sessions['revenue'] = fact_sessions['net_amount'].fillna(0)
    fact_sessions['purchase_flag'] = np.where(fact_sessions['order_id'].notnull(), 1, 0)
    
    # Join with users to determine if it's a new user session
    fact_sessions = fact_sessions.merge(users[['user_id', 'signup_date']], on='user_id', how='left')
    
    # 1. Derived Feature: is_new_user (Signup date matches session date)
    fact_sessions['is_new_user'] = np.where(
        fact_sessions['session_ts'].dt.date == fact_sessions['signup_date'].dt.date, 
        1, 0
    )
    
    # 2. Time-based features
    fact_sessions['day_of_week'] = fact_sessions['session_ts'].dt.day_name()
    fact_sessions['week_index'] = fact_sessions['session_ts'].dt.isocalendar().week
    fact_sessions['date'] = fact_sessions['session_ts'].dt.normalize()
    
    # 3. Join with ad_spend to get promo_flag (Rule: Based on campaign-date allocation)
    # We join on date and campaign_id
    ad_spend_promo = datasets['ad_spend'][['date', 'campaign_id', 'promo_flag']].drop_duplicates()
    fact_sessions = fact_sessions.merge(ad_spend_promo, on=['date', 'campaign_id'], how='left')
    fact_sessions['promo_flag'] = fact_sessions['promo_flag'].fillna(0).astype(int)
    
    # Outlier capping for revenue using IQR
    fact_sessions = handle_revenue_outliers(fact_sessions, 'revenue')
    
    print(" fact_sessions created.")
    return fact_sessions

def create_fact_campaign_daily(fact_sessions, datasets):
    """
    Aggregates session/order data and joins with ad spend at the campaign level.
    Ensures no duplication from ad_spend and keeps all revenue via outer join.
    """
    print("\n>>> Stage 4: Creating fact_campaign_daily...")
    
    # 1. Aggregate ad_spend first to resolve potential duplicates (date + campaign_id)
    ad_spend_agg = datasets['ad_spend'].groupby(['date', 'campaign_id']).agg({
        'spend': 'sum',
        'impressions': 'sum',
        'clicks': 'sum',
        'channel': 'first',
        'promo_flag': 'max'
    }).reset_index()
    
    # 2. Aggregate sessions/orders by date and campaign from fact_sessions
    agg_sessions = fact_sessions.groupby(['date', 'campaign_id']).agg(
        sessions=('session_id', 'count'),
        orders=('purchase_flag', 'sum'),
        total_revenue=('revenue', 'sum')
    ).reset_index()
    
    # 3. Merge ad_spend with session activity
    # Use 'outer' join to ensure revenue from sessions is kept even if no ad_spend row exists
    fact_campaign_daily = ad_spend_agg.merge(
        agg_sessions, 
        on=['date', 'campaign_id'], 
        how='outer'
    ).fillna(0)
    
    # 4. Map campaign name for readability and fill missing channels
    campaigns_info = datasets['campaigns'][['campaign_id', 'campaign_name', 'channel']].drop_duplicates()
    fact_campaign_daily = fact_campaign_daily.merge(
        campaigns_info, 
        on='campaign_id', 
        how='left', 
        suffixes=('', '_map')
    )
    
    # Ensure channel is populated for all rows (especially those without ad_spend)
    fact_campaign_daily['channel'] = fact_campaign_daily['channel'].replace(0, np.nan).fillna(fact_campaign_daily['channel_map'])
    fact_campaign_daily.drop(columns=['channel_map'], inplace=True)
    
    # Calculate Derived Performance Metrics
    fact_campaign_daily['CPC'] = fact_campaign_daily['spend'] / fact_campaign_daily['clicks'].replace(0, np.nan)
    fact_campaign_daily['CTR'] = fact_campaign_daily['clicks'] / fact_campaign_daily['impressions'].replace(0, np.nan)
    fact_campaign_daily['CVR'] = fact_campaign_daily['orders'] / fact_campaign_daily['sessions'].replace(0, np.nan)
    fact_campaign_daily['ROAS'] = fact_campaign_daily['total_revenue'] / fact_campaign_daily['spend'].replace(0, np.nan)
    fact_campaign_daily['CAC_proxy'] = fact_campaign_daily['spend'] / fact_campaign_daily['orders'].replace(0, np.nan)
    
    # week_index for time analysis
    fact_campaign_daily['week_index'] = fact_campaign_daily['date'].dt.isocalendar().week
    
    print(" fact_campaign_daily created.")
    return fact_campaign_daily

def create_fact_channel_daily(fact_campaign_daily):
    """
    Aggregates campaign data to the channel level.
    """
    print("\n>>> Stage 5: Creating fact_channel_daily...")
    
    fact_channel_daily = fact_campaign_daily.groupby(['date', 'channel']).agg(
        total_spend=('spend', 'sum'),
        total_impressions=('impressions', 'sum'),
        total_clicks=('clicks', 'sum'),
        total_sessions=('sessions', 'sum'),
        total_orders=('orders', 'sum'),
        total_revenue=('total_revenue', 'sum')
    ).reset_index()
    
    # Recalculate Metrics at Channel Level
    fact_channel_daily['CPC'] = fact_channel_daily['total_spend'] / fact_channel_daily['total_clicks'].replace(0, np.nan)
    fact_channel_daily['CTR'] = fact_channel_daily['total_clicks'] / fact_channel_daily['total_impressions'].replace(0, np.nan)
    fact_channel_daily['CVR'] = fact_channel_daily['total_orders'] / fact_channel_daily['total_sessions'].replace(0, np.nan)
    fact_channel_daily['ROAS'] = fact_channel_daily['total_revenue'] / fact_channel_daily['total_spend'].replace(0, np.nan)
    fact_channel_daily['CAC_proxy'] = fact_channel_daily['total_spend'] / fact_channel_daily['total_orders'].replace(0, np.nan)
    
    print(" fact_channel_daily created.")
    return fact_channel_daily

def save_outputs(fact_sessions, fact_campaign_daily, fact_channel_daily):
    """
    Saves the processed datasets as CSV files.
    """
    print(f"\n>>> Stage 6: Saving outputs to '{PROCESSED_DATA_DIR}'...")
    
    if not os.path.exists(PROCESSED_DATA_DIR):
        os.makedirs(PROCESSED_DATA_DIR)
        print(f" Created directory: {PROCESSED_DATA_DIR}")
    
    fact_sessions.to_csv(os.path.join(PROCESSED_DATA_DIR, "fact_sessions.csv"), index=False)
    fact_campaign_daily.to_csv(os.path.join(PROCESSED_DATA_DIR, "fact_campaign_daily.csv"), index=False)
    fact_channel_daily.to_csv(os.path.join(PROCESSED_DATA_DIR, "fact_channel_daily.csv"), index=False)
    
    print(" All files saved successfully.")

def main():
    """
    Main execution orchestration for the ETL pipeline.
    """
    print("="*50)
    print("STARTING MARKETING ROI ETL PIPELINE")
    print("="*50)
    
    try:
        # Load
        datasets = load_data()
        
        # Clean
        datasets = clean_data(datasets)
        
        # Transform: Sessions
        df_sessions = create_fact_sessions(datasets)
        
        # Transform: Campaign Daily
        df_campaign = create_fact_campaign_daily(df_sessions, datasets)
        
        # Transform: Channel Daily
        df_channel = create_fact_channel_daily(df_campaign)
        
        # Save
        save_outputs(df_sessions, df_campaign, df_channel)
        
        print("\n" + "="*50)
        print("PIPELINE EXECUTION COMPLETED SUCCESSFULLY")
        print("="*50)
        
    except Exception as e:
        print(f"\n!!! PIPELINE FAILED !!!")
        print(f"Reason: {e}")

if __name__ == "__main__":
    main()
