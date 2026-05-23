import { motion } from 'framer-motion';

export const Loader = () => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
    <div className="w-full max-w-md px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Loading Case Study</p>
      <h1 className="mt-4 font-display text-4xl text-foreground">Marketing ROI &amp; Budget Optimization</h1>
      <div className="mt-8 h-2 overflow-hidden rounded-full bg-border/50">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-success"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.25, ease: 'easeInOut' }}
        />
      </div>
      <p className="mt-4 text-sm text-muted">Preparing executive summary, KPI views, and recommendation stack.</p>
    </div>
  </div>
);
