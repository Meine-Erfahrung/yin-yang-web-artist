import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import yinYangIcon from '@/assets/yin-yang.png';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`theme-toggle cursor-hover ${theme === 'dark' ? 'dark' : ''}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.img
        src={yinYangIcon}
        alt="Theme toggle"
        className="w-6 h-6 yin-yang"
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
      />
    </motion.button>
  );
};

export default ThemeToggle;