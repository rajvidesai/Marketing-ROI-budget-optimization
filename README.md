# Marketing ROI & Budget Optimization

Business Analyst portfolio case study by **Rajvi Desai** focused on marketing attribution, regression modeling, dashboard storytelling, and budget reallocation strategy.

Live site:
- `https://rajvi-marketing-roi-portfolio.vercel.app`

GitHub repository:
- `https://github.com/rajvidesai/Marketing-ROI-budget-optimization`

## For Recruiters And Interviewers

This project is designed to demonstrate:
- analytical thinking and KPI framing
- business problem-solving and recommendation quality
- ETL and data preparation skills
- marketing attribution and regression modeling
- Power BI style dashboard storytelling
- the ability to translate analysis into executive communication

## Business Problem

The company invests across Search, Paid Social, Email, Referral, and Organic, but lacks a reliable framework to answer two high-value questions:
- which channels are truly driving revenue
- how next month's budget should be reallocated without increasing total spend

The project combines last-touch attribution, regression-based elasticity analysis, and an ETL pipeline to produce a decision-ready recommendation.

## What The Website Contains

- executive hero summary with headline KPIs
- project framing, stakeholder questions, and North Star metric
- ETL and data architecture explanation
- KPI and trend analysis
- attribution analysis
- regression modeling section
- budget reallocation strategy
- dashboard gallery with screenshot support
- final recommendation and recruiter contact section

## Core Results Highlighted

- `$74.47M` verified marketing spend analyzed
- `$102.11M` cleaned reporting-layer revenue across the channel and campaign facts
- `1.37x` blended portfolio ROAS from the cleaned reporting layer
- Paid Social identified as the clearest inefficiency with `38.44%` of spend but only `17.84%` of attributed revenue

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide React

## Repository Structure

```text
src/
  components/        Reusable UI building blocks
  data/              Central content and chart data
  hooks/             Theme behavior
  sections/          Page sections for the case-study narrative
public/
  dashboard/         Place Power BI screenshots here
  resume.pdf         Downloadable resume used by the CTA buttons
Data/                Curated fact tables for the project
Raw Data/Marketing ROI & Budget Reallocation (Attribution + Regression)/
Analysis/            Notebook analysis
ETL pipeline/        ETL implementation
Final memo/          Executive memo PDF
Power BI Dashboard/  Power BI source file
```

## Dashboard Screenshot Support

The dashboard gallery now supports real screenshots.

To replace the mock frames:
1. Export dashboard screenshots from Power BI.
2. Save them in `public/dashboard/`.
3. Update the matching objects in `src/data/portfolioData.ts`:
   - `imageSrc`
   - `imageAlt`
   - optional `href`

Example:

```ts
{
  title: 'Executive Summary View',
  description: 'KPI tiles, channel health, and the North Star metric in one recruiter-friendly glance.',
  tag: 'Power BI export',
  imageSrc: '/dashboard/executive-summary.png',
  imageAlt: 'Executive summary dashboard screenshot',
}
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Deployment

This project is deploy-ready for Vercel.

Recommended settings:
- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

## Notes

- The content layer is centralized in `src/data/portfolioData.ts`, which makes profile edits and KPI updates low-risk.
- The frontend uses lazy-loaded sections and manual Vite chunking to reduce the size of the primary JS bundle.
- The GitHub repository includes the Marketing ROI project assets and excludes unrelated case-study folders plus local build artifacts.
