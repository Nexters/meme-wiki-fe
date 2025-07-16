import { motion } from 'motion/react';

const DefaultComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>DefaultComponent</h1>
    </motion.div>
  );
};

export default DefaultComponent;
