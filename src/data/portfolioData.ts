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
    'I turn marketing and commercial data into clear decisions on budget, performance, and growth.',
  bio:
    'This case study shows how I move from raw data to KPI framing, analysis, dashboards, and business recommendations.',
  shortNote:
    'Built for fast review: problem, evidence, recommendation.',
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
    outcome: 'A clear investment thesis tied to measurable revenue efficiency.',
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
      'Used last-touch attribution for transparent reporting and regression as a directional challenge layer.',
    outcome: 'A clear split between verified evidence and testable hypotheses.',
  },
  {
    phase: '04',
    period: 'Recommendation',
    title: 'Convert analytics into a budget reallocation plan executives can act on',
    description:
      'Converted channel tradeoffs, risks, and caveats into a recommendation memo and dashboard narrative.',
    outcome: 'A reallocation thesis ready for pilot testing.',
  },
];

export const overviewCards: OverviewCard[] = [
  {
    title: 'Business Problem',
    description:
      'Spend was spread across five channels without a reliable way to separate efficient investment from budget leakage.',
    stat: '$74M+ analyzed spend and revenue footprint',
  },
  {
    title: 'Project Objective',
    description:
      'Identify where to scale, where to cut back, and how to improve return without raising total spend.',
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
      'Produced a reallocation thesis supported by verified KPIs, diagnostics, dashboards, and a monitoring plan.',
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
      'Show what last-touch misses, what the KPI layer clarifies, and where the model should stay directional.',
  },
  {
    question: 'How much upside is available if spend is shifted from Paid Social into Email and Search?',
    decisionAngle:
      'Decide whether the reallocation thesis is strong enough to pilot and which risks should be monitored.',
  },
];

export const northStarMetric = {
  title: 'Revenue Efficiency per $ Spent',
  description:
    'Use verified spend and revenue first, then use the model as a directional check.',
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
      'The coefficient is positive, but it conflicts with the weak KPI story and should be treated cautiously.',
  },
  {
    feature: 'Search',
    coefficient: 0.81,
    narrative: 'Search is the most consistent across both the KPI layer and the regression diagnostic.',
  },
  {
    feature: 'Referral',
    coefficient: -0.12,
    narrative: 'Referral shows limited standalone signal and should not drive budget decisions alone.',
  },
  {
    feature: 'Email',
    coefficient: -3.71,
    narrative:
      'The negative sign conflicts with observed ROAS, so this is a model warning, not a causal finding.',
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
      'Paid Social still matters for discovery, but it is the clearest place to test disciplined spend reduction.',
  },
  {
    title: 'Increase Email investment carefully',
    detail:
      'Email showed strong observed ROAS, but expansion should happen through measured testing, not blind scaling.',
  },
  {
    title: 'Protect Search as a capture layer',
    detail:
      'Search delivered the largest revenue base and the most stable signal, so it should remain the core capture layer.',
  },
  {
    title: 'Operationalize testing and monitoring',
    detail:
      'Use pacing checks, fatigue monitoring, and incrementality tests before locking a new mix.',
  },
];

