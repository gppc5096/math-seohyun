import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { soundManager } from '../../utils/sound';

const SoundControl = () => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleSound = () => {
    if (isMuted) {
      soundManager.playBGM();
    } else {
      soundManager.stopBGM();
    }
    setIsMuted(!isMuted);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleSound}
      className="fixed top-4 right-4 z-50 bg-white rounded-full p-3 shadow-lg"
    >
      {isMuted ? '🔇' : '🔊'}
    </motion.button>
  );
};

export default SoundControl; 