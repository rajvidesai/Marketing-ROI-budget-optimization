# Power BI Page Blueprint

This document translates the Marketing ROI case study into a clean, recruiter-friendly Power BI dashboard structure.

## Dashboard Goal

Build a decision-ready dashboard that helps a recruiter, hiring manager, or stakeholder understand:
- what the business problem was
- how the data was structured
- which channels performed well or poorly
- how attribution and regression were used differently
- what budget action should be taken next

## Recommended Page Structure

Create **5 Power BI pages**:

1. Executive Summary
2. Channel & Campaign Performance
3. Attribution Analysis
4. Regression & Budget Reallocation
5. Segment & Conversion Deep Dive

## Data Model To Use

Primary tables already available in the project:
- `fact_channel_daily`
- `fact_campaign_daily`
- `fact_sessions`

Recommended supporting dimensions inside Power BI:
- `Dim Date`
- `Dim Channel`
- `Dim Campaign`

### Suggested Relationships

- `Dim Date[Date]` -> `fact_channel_daily[date]`
- `Dim Date[Date]` -> `fact_campaign_daily[date]`
- `Dim Date[Date]` -> `fact_sessions[date]`
- `Dim Channel[channel]` -> `fact_channel_daily[channel]`
- `Dim Channel[channel]` -> `fact_campaign_daily[channel]`
- `Dim Channel[channel]` -> `fact_sessions[channel]`
- `Dim Campaign[campaign_id]` -> `fact_campaign_daily[campaign_id]`
- `Dim Campaign[campaign_id]` -> `fact_sessions[campaign_id]`

Keep filter direction single unless you have a specific reason to change it.

## Core Measures

Create a dedicated measure table called `Measures`.

```DAX
Total Spend = SUM(fact_channel_daily[total_spend])

Total Revenue = SUM(fact_channel_daily[total_revenue])

Total Orders = SUM(fact_channel_daily[total_orders])

Total Sessions = SUM(fact_channel_daily[total_sessions])

Total Clicks = SUM(fact_channel_daily[total_clicks])

Total Impressions = SUM(fact_channel_daily[total_impressions])

ROAS = DIVIDE([Total Revenue], [Total Spend])

CAC Proxy = DIVIDE([Total Spend], [Total Orders])

CVR % = DIVIDE([Total Orders], [Total Sessions])

CPC = DIVIDE([Total Spend], [Total Clicks])

CTR % = DIVIDE([Total Clicks], [Total Impressions])

AOV = DIVIDE([Total Revenue], [Total Orders])
```

Page-specific comparison measures:

```DAX
Spend Share % =
DIVIDE(
    [Total Spend],
    CALCULATE([Total Spend], ALL('Dim Channel'))
)

Revenue Share % =
DIVIDE(
    [Total Revenue],
    CALCULATE([Total Revenue], ALL('Dim Channel'))
)

Share Gap % = [Revenue Share %] - [Spend Share %]
```

Session-based measures:

```DAX
Purchasing Sessions =
CALCULATE(
    COUNTROWS(fact_sessions),
    fact_sessions[purchase_flag] = 1
)

New User Sessions =
CALCULATE(
    COUNTROWS(fact_sessions),
    fact_sessions[is_new_user] = 1
)

Returning User Sessions =
CALCULATE(
    COUNTROWS(fact_sessions),
    fact_sessions[is_new_user] = 0
)
```

If you want a New vs Returning conversion metric:

```DAX
New User CVR % =
DIVIDE(
    CALCULATE(COUNTROWS(fact_sessions), fact_sessions[is_new_user] = 1, fact_sessions[purchase_flag] = 1),
    CALCULATE(COUNTROWS(fact_sessions), fact_sessions[is_new_user] = 1)
)

Returning User CVR % =
DIVIDE(
    CALCULATE(COUNTROWS(fact_sessions), fact_sessions[is_new_user] = 0, fact_sessions[purchase_flag] = 1),
    CALCULATE(COUNTROWS(fact_sessions), fact_sessions[is_new_user] = 0)
)
```

## Page 1: Executive Summary

### Purpose

Give a 15-second business snapshot.

### Layout

Top row:
- Card: Total Spend
- Card: Total Revenue
- Card: ROAS
- Card: CAC Proxy
- Card: CVR %

Middle row:
- Line chart: `Date` vs `Total Revenue`
- Line chart: `Date` vs `Total Spend`
- Clustered bar chart: `Channel` vs `ROAS`

Bottom row:
- Matrix:
  - Rows: `Channel`
  - Values: `Total Spend`, `Total Revenue`, `ROAS`, `CAC Proxy`, `Spend Share %`, `Revenue Share %`, `Share Gap %`
- Text box: executive summary with 3 key findings

### Slicers

- Date range
- Channel
- Promo flag

### Storyline

Use this page to show:
- Email and Organic are highly efficient
- Search is the largest revenue driver
- Paid Social is consuming too much spend for too little return

## Page 2: Channel & Campaign Performance

### Purpose

Identify where spend is working and where it is being wasted.

### Layout

Left side:
- Scatter chart
  - X-axis: `CAC Proxy`
  - Y-axis: `ROAS`
  - Size: `Total Spend`
  - Details: `Channel`

Right side:
- Clustered column chart
  - Axis: `campaign_name`
  - Values: `total_revenue`, `spend`

Bottom:
- Table
  - `campaign_name`
  - `channel`
  - `spend`
  - `orders`
  - `total_revenue`
  - `ROAS`
  - `CAC_proxy`
  - `CVR`

### Slicers

- Channel
- Campaign
- Promo flag
- Week index

### Storyline

This page should make it easy to say:
- which campaigns are efficient
- which campaigns are expensive but weak
- where to pause, reduce, or scale investment

## Page 3: Attribution Analysis

### Purpose

Explain what channels close revenue and which ones mainly assist the funnel.

### Layout

Top:
- KPI cards:
  - Total Attributed Revenue
  - Attributed ROAS
  - Orders

Middle:
- Bar chart:
  - Axis: `channel`
  - Values: `ROAS`

- Funnel-style visual or stacked explanation panel:
  - Discovery: Paid Social
  - Consideration: Search / Referral
  - Conversion: Email

Bottom:
- Matrix by channel:
  - `Total Spend`
  - `Total Revenue`
  - `ROAS`
  - `Total Orders`
  - `CVR`

### Optional Enhancement

If you want the exact "Attributed vs Blended ROAS" comparison from the memo, create a small manual table in Power BI:

```text
Channel        AttributedROAS   BlendedROAS
Paid Social    0.64             3.63
Search         1.29             3.04
Email          4.99             26.64
```

Then show a side-by-side clustered bar chart.

### Storyline

Use this page to explain:
- last-touch attribution is transparent and useful
- it can undervalue upper-funnel support channels
- Paid Social should be reduced, not blindly eliminated

## Page 4: Regression & Budget Reallocation

### Purpose

Show how the regression output was used as a diagnostic check alongside descriptive KPI evidence.

### Layout

Top:
- KPI cards:
  - R-Squared = `0.419`
  - RMSE = `86,556`
  - MAE = `67,671`
  - Blended ROAS = `1.37x`

Middle left:
- Horizontal bar chart for coefficient strength:
  - Paid Social = `1.05`
  - Search = `0.81`
  - Referral = `-0.12`
  - Email = `-3.71`

Middle right:
- Clustered bar chart:
  - Axis: channel
  - Current allocation %
  - Proposed allocation %

Bottom:
- Context table:
  - Orders in scope = `16,193`
  - Session CVR = `2.46%`
  - Portfolio AOV = `$6.31K`

- Text box:
  - Why Search remains the most stable capture layer
  - Why Email should be tested carefully rather than scaled blindly
  - Why Paid Social is the first place to investigate reallocation

### Storyline

This is your "recommendation" page.

It should make a stakeholder comfortable saying:
- we are not just reporting the past
- we are using the model to challenge the KPI story rather than overclaim causality
- we still need controlled testing before locking a new budget mix

## Page 5: Segment & Conversion Deep Dive

### Purpose

Show that you explored user behavior, device patterns, and timing effects.

### Layout

Top:
- Card: New User CVR %
- Card: Returning User CVR %
- Card: Purchasing Sessions

Middle left:
- Column chart:
  - Axis: `device`
  - Value: conversion rate

Middle right:
- Column chart:
  - Axis: `day_of_week`
  - Value: purchasing sessions or CVR

Bottom:
- Stacked bar:
  - Axis: `channel`
  - Legend: `is_new_user`
  - Value: sessions

- Table:
  - `channel`
  - `device`
  - `is_new_user`
  - session count
  - purchase count

### Storyline

Use this page to show:
- new vs returning behavior
- desktop vs mobile performance
- weekday / promo effects

## Design Guidance

Use a clean consulting-style look:
- white or very light page background
- deep navy headers
- blue as the primary accent
- teal for positive efficiency
- orange only for risk / weak performance

### Recommended Visual Colors

- Primary blue: `#2563EB`
- Teal: `#0F766E`
- Slate: `#64748B`
- Orange risk: `#EA580C`
- Dark text: `#0F172A`

## Page Naming

Use simple recruiter-friendly names:
- `01_Executive Summary`
- `02_Channel Performance`
- `03_Attribution Analysis`
- `04_Regression & Reallocation`
- `05_Segment Deep Dive`

## Final Build Order

1. Load the 3 fact tables
2. Create `Dim Date`, `Dim Channel`, and `Dim Campaign`
3. Create the measures
4. Build page 1 first
5. Build page 2 and drilldowns
6. Add attribution comparison page
7. Add regression and budget page
8. Finish with segment deep dive
9. Export screenshots for:
   - `executive-summary.png`
   - `channel-deep-dive.png`
   - `modeling-lens.png`

## Best 3 Screenshots To Export For The Website

If you only export 3 images for the portfolio site, use:

1. **Executive Summary**
   Best first impression for recruiters.

2. **Channel & Campaign Performance**
   Best for showing analytical diagnosis and business actionability.

3. **Regression & Reallocation**
   Best for showing advanced thinking beyond dashboarding.
