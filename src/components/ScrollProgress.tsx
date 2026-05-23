import { motion, useScroll } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-primary via-secondary to-success"
      style={{ scaleX: scrollYProgress, width: '100%' }}
    />
  );
};
