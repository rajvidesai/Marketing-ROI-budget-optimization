# Marketing ROI Portfolio Website

Professional React + Tailwind portfolio website for the project **Marketing ROI & Budget Optimization (Attribution + Regression)**. The site is designed to feel like an executive business analytics case study suitable for recruiters, hiring managers, and interview panels.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide React icons

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The production output will be generated in `dist/`.

## Key files to customize

- `src/data/portfolioData.ts`
  Replace your name, email, LinkedIn, GitHub, resume link, and any project copy or numbers you want to change.
- `public/`
  Add real assets here such as:
  - `resume.pdf`
  - exported Power BI screenshots
  - personal headshot or logo if desired
- `index.html`
  Update SEO metadata, production URL, and Open Graph details before deployment.

## Replacing the dashboard placeholders

1. Export dashboard screenshots from Power BI.
2. Save them in `public/` or a `public/images/` folder.
3. Update the `dashboardGallery` data in `src/data/portfolioData.ts`.
4. If you want true image-based cards, replace the placeholder markup in `src/components/DashboardShotCard.tsx`.

## Resume download setup

The UI includes resume download buttons. To make them live:

1. Place your real resume at `public/resume.pdf`
2. Change `resumeUrl` in `src/data/portfolioData.ts` to `/resume.pdf`

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Framework preset: `Vite`
4. Build command: `npm run build`
5. Output directory: `dist`

## Deploy to Netlify

1. Push the project to GitHub.
2. Create a new Netlify site from the repo.
3. Build command: `npm run build`
4. Publish directory: `dist`

## Deploy to GitHub Pages

1. If the site is hosted in a repository subpath, set `VITE_BASE_PATH=/your-repo-name/` during build.
2. Build the project:

```bash
$env:VITE_BASE_PATH='/your-repo-name/'
npm run build
```

3. Publish the generated `dist/` directory using your preferred GitHub Pages workflow.

## Notes

- The site uses a central data file so future edits are fast and low-risk.
- The design includes dark/light mode, smooth scrolling, sticky navigation, scroll-triggered animations, and recruiter-focused copy structure.
- The charts use realistic dataset-derived values from the existing project files in this workspace.
