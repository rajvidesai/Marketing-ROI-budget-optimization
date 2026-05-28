export type NavItem = {
  label: string;
  href: string;
};

export type MetricCard = {
  label: string;
  value: string;
  detail: string;
};

export type Skill = {
  label: string;
  group: string;
};

export type TimelineEntry = {
  phase: string;
  period: string;
  title: string;
  description: string;
  outcome: string;
};

export type OverviewCard = {
  title: string;
  description: string;
  stat: string;
};

export type DataSource = {
  title: string;
  detail: string;
};

export type PipelineStage = {
  title: string;
  summary: string;
  details: string[];
};

export type FactTable = {
  name: string;
  grain: string;
  purpose: string;
};

export type TrendPoint = {
  month: string;
  revenue: number;
  spend: number;
  cvr: number;
};

export type ChannelPoint = {
  channel: string;
  spend: number;
  revenue: number;
  roas: number;
  cvr: number;
};

export type AttributionPoint = {
  channel: string;
  spendShare: number;
  revenueShare: number;
  interpretation: string;
};

export type RegressionImpact = {
  feature: string;
  coefficient: number;
  narrative: string;
};

export type AllocationPoint = {
  channel: string;
  current: number;
  proposed: number;
};

export type Scenario = {
  name: string;
  uplift: string;
  detail: string;
};

export type DashboardCard = {
  title: string;
  description: string;
  tag: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
};

export type Recommendation = {
  title: string;
  detail: string;
};

export type StakeholderQuestion = {
  question: string;
  decisionAngle: string;
};

export const siteConfig = {
  name: 'Rajvi Desai',
  roleHeadline: 'Business Analyst | Marketing Analytics | ROI Optimization',
  intro:
    'I translate marketing and commercial data into clear business decisions, combining ETL, KPI design, and executive storytelling to show where budget is efficient, where it is leaking, and what leaders should do next.',
  bio:
    'This case study demonstrates my end-to-end business analytics approach across data engineering, KPI framing, attribution, regression diagnostics, dashboard storytelling, and recommendation writing.',
  shortNote:
    'The portfolio is structured so recruiters and hiring managers can quickly assess how I frame problems, validate numbers, and communicate decisions.',
  email: 'desairajvi29@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/rajvi-desai-1356a81b1',
  linkedInDisplay: 'linkedin.com/in/rajvi-desai-1356a81b1',
  github: 'https://github.com/rajvidesai/Marketing-ROI-budget-optimization',
  githubDisplay: 'github.com/rajvidesai/Marketing-ROI-budget-optimization',
  resumeUrl: '/resume.pdf',
};

export const navItems: NavItem[] = [
  { label: 'Overview', href: '#project-overview' },
  { label: 'Architecture', href: '#data-architecture' },
  { label: 'KPIs', href: '#kpi-analysis' },
  { label: 'Modeling', href: '#regression-modeling' },
  { label: 'Strategy', href: '#budget-strategy' },
  { label: 'Contact', href: '#recruiter-cta' },
];

export const heroMetrics: MetricCard[] = [
  {
    label: 'Marketing Spend Analyzed',
    value: '$74.47M',
    detail: 'Verified directly from the raw ad spend file and matched to the cleaned fact tables.',
  },
  {
    label: 'Clean Revenue Base',
    value: '$102.11M',
    detail: 'Channel and campaign reporting layer revenue after ETL cleanup and aggregation.',
  },
  {
    label: 'Blended Portfolio ROAS',
    value: '1.37x',
    detail: 'Computed as cleaned revenue divided by total marketing spend across the full portfolio.',
  },
  {
    label: 'Paid Social Gap',
    value: '-20.59 pts',
    detail: 'Paid Social consumed 38.44% of spend but delivered only 17.84% of attributed revenue.',
  },
];

export const skills: Skill[] = [
  { label: 'Python', group: 'Languages' },
  { label: 'SQL', group: 'Languages' },
  { label: 'Power BI', group: 'BI' },
  { label: 'Tableau', group: 'BI' },
  { label: 'Excel', group: 'Analysis' },
  { label: 'Regression Modeling', group: 'Modeling' },
  { label: 'Marketing Analytics', group: 'Domain' },
  { label: 'ETL Pipelines', group: 'Engineering' },
  { label: 'Data Visualization', group: 'Communication' },
  { label: 'Attribution Modeling', group: 'Modeling' },
];

export const projectTimeline: TimelineEntry[] = [
  {
    phase: '01',
    period: 'Framing',
    title: 'Translate business ambiguity into decision-grade KPIs',
    description:
      'Defined the capital allocation problem, aligned on the North Star metric, and structured stakeholder questions around efficiency, channel roles, and revenue impact.',
    outcome: 'A clear investment thesis anchored in measurable revenue efficiency and business tradeoffs.',
  },
  {
    phase: '02',
    period: 'Data Engineering',
    title: 'Build a reproducible ETL foundation across messy marketing data',
    description:
      'Standardized channel casing, resolved duplicates, capped outliers, and created fact tables that support both reporting and econometric analysis.',
    outcome: 'Three clean analytical layers: session, campaign-daily, and channel-daily facts.',
  },
  {
    phase: '03',
    period: 'Measurement',
    title: 'Separate descriptive reporting from model-based diagnostics',
    description:
      'Used last-touch attribution for transparent channel reporting and a regression layer as a directional check on how spend response may differ from simple historical ownership.',
    outcome: 'A cleaner distinction between what the data directly proves and what the business should validate through testing.',
  },
  {
    phase: '04',
    period: 'Recommendation',
    title: 'Convert analytics into a budget reallocation plan executives can act on',
    description:
      'Synthesized channel tradeoffs, operational risks, and measurement caveats into a recommendation memo and dashboard narrative built for decision-makers.',
    outcome: 'A practical reallocation thesis designed for pilot testing before full rollout.',
  },
];

export const overviewCards: OverviewCard[] = [
  {
    title: 'Business Problem',
    description:
      'Marketing investment across Search, Paid Social, Email, Referral, and Organic lacked a clear framework for separating efficient spend from budget leakage.',
    stat: '$74M+ analyzed spend and revenue footprint',
  },
  {
    title: 'Project Objective',
    description:
      'Identify which channels and campaigns merit more capital, which appear saturated, and how to improve return without asking for more budget.',
    stat: 'Fixed-budget optimization',
  },
  {
    title: 'Stakeholder Lens',
    description:
      'Answer leadership questions on CAC, ROAS, conversion behavior, new vs. returning users, and the downside risk of cutting discovery channels too aggressively.',
    stat: 'Cross-functional executive audience',
  },
  {
    title: 'Business Impact',
    description:
      'Produced a budget reallocation thesis supported by verified KPI evidence, regression diagnostics, dashboarding, and a clear test-and-monitoring plan.',
    stat: '20.59-point Paid Social efficiency gap surfaced',
  },
];

export const stakeholderQuestions: StakeholderQuestion[] = [
  {
    question: 'Which campaigns are wasting spend through high CAC and weak attributed revenue?',
    decisionAngle:
      'Identify campaigns to pause, reduce, or rework so budget can move toward stronger efficiency pockets.',
  },
  {
    question: 'How do new and returning users behave differently across channels and devices?',
    decisionAngle:
      'Separate acquisition and retention behavior to decide where targeting, landing-page, and remarketing efforts should change.',
  },
  {
    question: 'What does attributed ROAS miss that blended performance and regression can explain?',
    decisionAngle:
      'Show where last-touch reporting is incomplete, where descriptive portfolio performance adds context, and where the model should only be used as a challenge layer.',
  },
  {
    question: 'How much upside is available if spend is shifted from Paid Social into Email and Search?',
    decisionAngle:
      'Decide whether the reallocation thesis is strong enough to pilot, what the downside risks are, and which metrics should be monitored after launch.',
  },
];

export const northStarMetric = {
  title: 'Revenue Efficiency per $ Spent',
  description:
    'The reporting layer anchors the case in verified spend and revenue, while the regression layer is used as a directional sensitivity check rather than a standalone budget engine.',
};

export const dataSources: DataSource[] = [
  { title: 'users.csv', detail: 'Profiles, signup dates, and user segmentation context.' },
  { title: 'sessions.csv', detail: 'Touchpoint-level clickstream activity with device and campaign lineage.' },
  { title: 'orders.csv + order_items.csv', detail: 'Transaction records used to connect sessions to monetization.' },
  { title: 'ad_spend_daily.csv', detail: 'Daily spend, clicks, impressions, and promo flags by campaign.' },
  { title: 'campaigns.csv', detail: 'Campaign metadata including channel, objective, and naming conventions.' },
  { title: 'products.json', detail: 'Catalog context supporting margin and assortment analysis.' },
];

export const pipelineStages: PipelineStage[] = [
  {
    title: 'Load and standardize raw files',
    summary: 'Ingested CSV and JSON sources into a structured ETL workflow with defensive error handling.',
    details: [
      'Converted signup, session, order, and spend fields into typed datetime columns.',
      'Normalized channel values to avoid case-based fragmentation in downstream aggregates.',
      'Protected the pipeline from missing-file failures early in execution.',
    ],
  },
  {
    title: 'Clean quality issues before modeling',
    summary: 'Prepared the data for trustworthy KPI reporting and regression readiness.',
    details: [
      'Filled missing spend, clicks, and impressions with zero to preserve channel continuity.',
      'Dropped duplicate session and order IDs to prevent inflated conversion counts.',
      'Capped non-zero revenue outliers with an IQR rule to reduce distortion in aggregate performance.',
    ],
  },
  {
    title: 'Construct analytical fact tables',
    summary: 'Joined customer, spend, and order data into reusable layers for both dashboarding and modeling.',
    details: [
      'Created `fact_sessions` with purchase flags, new-user indicators, weekday tags, and promo alignment.',
      'Created `fact_campaign_daily` with spend, traffic, conversion, and efficiency metrics by campaign-date.',
      'Created `fact_channel_daily` to power channel-level KPI reviews and regression features.',
    ],
  },
];

export const factTables: FactTable[] = [
  {
    name: 'fact_sessions',
    grain: '1 row per session',
    purpose: 'Supports attribution logic, new-vs-returning analysis, and session-to-order linkage.',
  },
  {
    name: 'fact_campaign_daily',
    grain: '1 row per campaign per day',
    purpose: 'Powers campaign diagnostics, KPI cards, and channel rollups with spend integration.',
  },
  {
    name: 'fact_channel_daily',
    grain: '1 row per channel per day',
    purpose: 'Feeds trend analysis, channel comparison charts, and regression-ready time-series inputs.',
  },
];

export const monthlyTrend: TrendPoint[] = [
  { month: 'Jul', revenue: 12.89, spend: 9.08, cvr: 2.49 },
  { month: 'Aug', revenue: 15.05, spend: 10.81, cvr: 2.54 },
  { month: 'Sep', revenue: 13.28, spend: 9.96, cvr: 2.32 },
  { month: 'Oct', revenue: 14.73, spend: 10.9, cvr: 2.43 },
  { month: 'Nov', revenue: 15.65, spend: 11.13, cvr: 2.54 },
  { month: 'Dec', revenue: 16.34, spend: 11.67, cvr: 2.57 },
  { month: 'Jan', revenue: 14.16, spend: 10.92, cvr: 2.33 },
];

export const channelPerformance: ChannelPoint[] = [
  { channel: 'Search', spend: 34.35, revenue: 44.21, roas: 1.29, cvr: 2.98 },
  { channel: 'Paid Social', spend: 28.62, revenue: 18.22, roas: 0.64, cvr: 1.63 },
  { channel: 'Email', spend: 3.83, revenue: 19.1, roas: 4.99, cvr: 4.31 },
  { channel: 'Referral', spend: 6.7, revenue: 8.4, roas: 1.25, cvr: 2.88 },
  { channel: 'Organic', spend: 0.96, revenue: 12.18, roas: 12.68, cvr: 1.64 },
];

export const attributionComparison: AttributionPoint[] = [
  {
    channel: 'Paid Social',
    spendShare: 38.44,
    revenueShare: 17.84,
    interpretation:
      'The clearest efficiency gap in the portfolio: high budget concentration but materially lower attributed revenue share.',
  },
  {
    channel: 'Search',
    spendShare: 46.13,
    revenueShare: 43.3,
    interpretation:
      'Search absorbs the most spend and still returns the largest revenue share, making it the most stable capture layer.',
  },
  {
    channel: 'Email',
    spendShare: 5.14,
    revenueShare: 18.7,
    interpretation:
      'A small-budget closer with outsized revenue contribution, which is why it remains a strong expansion candidate for testing.',
  },
  {
    channel: 'Organic',
    spendShare: 1.29,
    revenueShare: 11.93,
    interpretation:
      'Organic contributes far more revenue share than spend share, reinforcing that not all high-value channels come from paid investment.',
  },
];

export const funnelStages = [
  { label: 'Discovery', value: 'Paid Social', note: 'High reach and awareness contribution' },
  { label: 'Consideration', value: 'Search + Referral', note: 'Intent capture and product comparison moments' },
  { label: 'Conversion', value: 'Email', note: 'High-ROAS closer for known users and remarketing flows' },
];

export const regressionMetrics = [
  { label: 'Model', value: 'Log-Log Linear Regression' },
  { label: 'R-Squared', value: '0.419' },
  { label: 'RMSE', value: '86,556' },
  { label: 'MAE', value: '67,671' },
];

export const regressionFeatures = [
  'Channel-level daily spend',
  'Promo flag controls',
  'Day-of-week seasonality',
  'Weekly trend indexing',
  'Revenue response with diminishing returns',
];

export const regressionImpacts: RegressionImpact[] = [
  {
    feature: 'Paid Social',
    coefficient: 1.05,
    narrative:
      'The saved notebook output shows a positive coefficient, but it conflicts with the channel\'s weak descriptive ROAS and should be treated cautiously.',
  },
  {
    feature: 'Search',
    coefficient: 0.81,
    narrative: 'Search is directionally the most consistent across both the descriptive KPI layer and the regression diagnostic.',
  },
  {
    feature: 'Referral',
    coefficient: -0.12,
    narrative: 'Referral shows limited standalone incremental signal in the saved model output and should not drive budget decisions alone.',
  },
  {
    feature: 'Email',
    coefficient: -3.71,
    narrative:
      'The negative sign conflicts with Email\'s observed ROAS, signaling multicollinearity or endogeneity rather than a trustworthy causal effect.',
  },
];

export const allocationComparison: AllocationPoint[] = [
  { channel: 'Paid Social', current: 38.4, proposed: 20 },
  { channel: 'Email', current: 5.1, proposed: 15 },
  { channel: 'Search', current: 46.1, proposed: 55 },
  { channel: 'Referral + Organic', current: 10.4, proposed: 10 },
];

export const scenarioPlanning: Scenario[] = [
  {
    name: 'Orders in scope',
    uplift: '16,193',
    detail: 'Cleaned conversion events retained in the channel and campaign reporting layer.',
  },
  {
    name: 'Session CVR',
    uplift: '2.46%',
    detail: 'Computed from 16,193 cleaned orders over 657,820 fact-session rows.',
  },
  {
    name: 'Portfolio AOV',
    uplift: '$6.31K',
    detail: 'Average order value based on the cleaned channel and campaign reporting layer.',
  },
];

export const dashboardGallery: DashboardCard[] = [
  {
    title: 'Executive Summary View',
    description: 'High-level KPI tiles, budget mix, and the North Star metric in one executive-ready dashboard view.',
    tag: 'Power BI export',
    imageSrc: '/dashboard/executive-summary.png',
    imageAlt: 'Executive summary dashboard screenshot',
    href: '/dashboard/executive-summary.png',
  },
  {
    title: 'Channel & Campaign Deep Dive',
    description: 'ROAS, CAC, CVR, and campaign-level diagnostics used to identify underperforming investments.',
    tag: 'Power BI export',
    imageSrc: '/dashboard/channel-deep-dive.png',
    imageAlt: 'Channel and campaign performance dashboard screenshot',
    href: '/dashboard/channel-deep-dive.png',
  },
  {
    title: 'Attribution vs. Regression Lens',
    description: 'Side-by-side measurement views comparing historical revenue ownership with modeled incremental impact.',
    tag: 'Power BI export',
    imageSrc: '/dashboard/modeling-lens.png',
    imageAlt: 'Attribution versus regression dashboard screenshot',
    href: '/dashboard/modeling-lens.png',
  },
  {
    title: 'Segments & Opportunities',
    description: 'New vs. returning user behavior, device-level conversion, and segment insights that support optimization priorities.',
    tag: 'Power BI export',
    imageSrc: '/dashboard/segments-opportunities.png',
    imageAlt: 'Segments and opportunities dashboard screenshot',
    href: '/dashboard/segments-opportunities.png',
  },
];

export const recommendations: Recommendation[] = [
  {
    title: 'Reduce overspend in Paid Social',
    detail:
      'Paid Social still matters for discovery, but its descriptive ROAS and revenue share lagged its budget weight, making it the clearest place to investigate controlled spend reduction.',
  },
  {
    title: 'Increase Email investment carefully',
    detail:
      'Email combined strong observed ROAS with a small spend base, but the regression output was unstable, so any scale-up should happen through measured testing rather than blind expansion.',
  },
  {
    title: 'Protect Search as a capture layer',
    detail:
      'Search delivered the largest revenue base and the most internally consistent signal across reporting and diagnostics, so it should remain the core demand-capture layer.',
  },
  {
    title: 'Operationalize testing and monitoring',
    detail:
      'Use weekly pacing checks, fatigue monitoring, and structured incrementality tests to validate any reallocation before locking in a new budget mix.',
  },
];

