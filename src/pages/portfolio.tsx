import { motion } from 'framer-motion';

export default function PortfolioPage() {
  return (
    <motion.div
      className="flex m-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-8xl font-bold select-none">&#123; WIP &#125;</div>
    </motion.div>
  );
}
