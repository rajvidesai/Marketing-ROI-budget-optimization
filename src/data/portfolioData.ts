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
  attributedRoas: number;
  blendedRoas: number;
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
    'I turn messy commercial and marketing data into decision-ready stories, building analytics that show where growth comes from, where budget should move, and how leaders can act with confidence.',
  bio:
    'This case study shows my end-to-end business analytics approach across ETL design, KPI framing, attribution, regression modeling, dashboard storytelling, and executive recommendation writing.',
  shortNote:
    'The portfolio is structured so recruiters and hiring managers can understand my analytical thinking, technical toolkit, and communication style in under a minute.',
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
    label: 'Expected ROAS Improvement',
    value: '+12%',
    detail: 'Base-case uplift from reallocating budget under a fixed spend cap.',
  },
  {
    label: 'Incremental Revenue Impact',
    value: '$1.4M',
    detail: 'Monthly lift projected by the recommended channel mix.',
  },
  {
    label: 'Budget Optimization Shift',
    value: '18.4 pts',
    detail: 'Paid Social budget moved toward higher-efficiency channels.',
  },
  {
    label: 'Attribution Insight',
    value: '1.58x',
    detail: 'Email showed the strongest modeled elasticity in the regression layer.',
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
    outcome: 'A clear investment thesis with incremental revenue per dollar spent as the anchor.',
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
    title: 'Compare heuristic attribution with modeled incremental impact',
    description:
      'Used last-touch attribution for transparent bottom-funnel reporting and log-log regression to estimate spend elasticity with seasonality controls.',
    outcome: 'A balanced view of both historical conversion ownership and forward-looking spend response.',
  },
  {
    phase: '04',
    period: 'Recommendation',
    title: 'Convert analytics into a budget reallocation plan executives can act on',
    description:
      'Synthesized channel tradeoffs, risk assumptions, and expected scenarios into a consulting-style recommendation memo and dashboard narrative.',
    outcome: 'A practical strategy to redirect spend without increasing total budget.',
  },
];

export const overviewCards: OverviewCard[] = [
  {
    title: 'Business Problem',
    description:
      'Marketing spend was distributed across Search, Paid Social, Email, Referral, and Organic without a clear framework for incremental impact.',
    stat: '$74M+ analyzed spend and revenue footprint',
  },
  {
    title: 'Project Objective',
    description:
      'Identify which channels and campaigns deserve more capital, which are saturated, and how to improve return without increasing total budget.',
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
      'Produced a decision-ready budget reallocation plan supported by attribution, regression, dashboarding, and scenario-based business recommendations.',
    stat: '+$1.4M base-case monthly uplift',
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
      'Show where last-touch alone underestimates assist channels and where modeled incremental impact changes the budget story.',
  },
  {
    question: 'How much upside is available if spend is shifted from Paid Social into Email and Search?',
    decisionAngle:
      'Quantify the expected revenue lift and downside risk before recommending a concrete reallocation plan.',
  },
];

export const northStarMetric = {
  title: 'Incremental Revenue per $ Spent',
  description:
    'The analysis optimizes for marginal impact rather than simple historical averages, allowing leadership to reallocate budget based on expected response, not only reported revenue ownership.',
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
    attributedRoas: 0.64,
    blendedRoas: 3.63,
    interpretation: 'Acts as a discovery engine with strong assist value but weak closing power.',
  },
  {
    channel: 'Search',
    attributedRoas: 1.29,
    blendedRoas: 3.04,
    interpretation: 'Core revenue driver with both direct capture and dependable demand harvest.',
  },
  {
    channel: 'Email',
    attributedRoas: 4.99,
    blendedRoas: 26.64,
    interpretation: 'High-intent closer that performs best when upstream channels keep the funnel warm.',
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
    feature: 'Email Spend',
    coefficient: 1.58,
    narrative: 'Strongest elasticity, indicating room to scale within the observed budget range.',
  },
  {
    feature: 'Search Spend',
    coefficient: 1.12,
    narrative: 'Reliable demand capture channel with positive marginal lift and manageable saturation.',
  },
  {
    feature: 'Promo Flag',
    coefficient: 0.48,
    narrative: 'Promotional periods explain a meaningful share of short-term conversion volatility.',
  },
  {
    feature: 'Paid Social Spend',
    coefficient: 0.34,
    narrative: 'Lower incremental response suggests mature saturation and weaker bottom-funnel payoff.',
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
    name: 'Best Case',
    uplift: '+$2.2M',
    detail: 'If higher-intent traffic sustains CVR and Email scales without meaningful fatigue.',
  },
  {
    name: 'Base Case',
    uplift: '+$1.4M',
    detail: 'Expected monthly lift under modeled elasticity and fixed total spend.',
  },
  {
    name: 'Worst Case',
    uplift: '+$0.5M',
    detail: 'If channel saturation appears earlier and upper-funnel assistance declines.',
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
      'Paid Social remained important for discovery but underperformed on last-touch ROAS and showed weak incremental elasticity, making it the primary source of reallocation capital.',
  },
  {
    title: 'Increase Email investment carefully',
    detail:
      'Email combined strong attributed performance with the highest modeled coefficient, making it the strongest candidate for profitable scale.',
  },
  {
    title: 'Protect Search as a capture layer',
    detail:
      'Search delivered the largest revenue base and dependable modeled response, so the plan preserves and modestly expands its role in the final mix.',
  },
  {
    title: 'Operationalize testing and monitoring',
    detail:
      'Recommended weekly pacing checks, fatigue monitoring, and incremental experiment design to validate the reallocation in production.',
  },
];
