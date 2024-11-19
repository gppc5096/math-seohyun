import React from 'react';
import { motion } from 'framer-motion';

interface SeonyProps {
  emotion: 'happy' | 'thinking' | 'cheering';
  message?: string;
}

const Seony = ({ emotion, message }: SeonyProps) => {
  const getEmoji = () => {
    switch (emotion) {
      case 'happy':
        return '😊';
      case 'thinking':
        return '🤔';
      case 'cheering':
        return '🎉';
      default:
        return '😊';
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", bounce: 0.5 }}
      className="fixed bottom-4 right-4 flex items-end"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-lg p-4 mb-4 mr-4 shadow-lg max-w-xs"
      >
        {message || "안녕! 서현아! 할아버지가 도와줄게~"}
        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ▼
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-6xl cursor-pointer"
      >
        {getEmoji()}
      </motion.div>
    </motion.div>
  );
};

export default Seony; 