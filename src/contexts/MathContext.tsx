import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MathContextType {
  score: number;
  addScore: (points: number) => void;
  consecutiveCorrect: number;
  updateConsecutiveCorrect: (isCorrect: boolean) => void;
  gardenProgress: number;
  updateGardenProgress: () => void;
}

const MathContext = createContext<MathContextType | undefined>(undefined);

export const MathProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(0);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [gardenProgress, setGardenProgress] = useState(0);

  const addScore = (points: number) => {
    setScore(prev => prev + points);
  };

  const updateConsecutiveCorrect = (isCorrect: boolean) => {
    if (isCorrect) {
      setConsecutiveCorrect(prev => prev + 1);
    } else {
      setConsecutiveCorrect(0);
    }
  };

  const updateGardenProgress = () => {
    setGardenProgress(prev => Math.min(prev + 10, 100));
  };

  return (
    <MathContext.Provider value={{
      score,
      addScore,
      consecutiveCorrect,
      updateConsecutiveCorrect,
      gardenProgress,
      updateGardenProgress
    }}>
      {children}
    </MathContext.Provider>
  );
};

export const useMath = () => {
  const context = useContext(MathContext);
  if (context === undefined) {
    throw new Error('useMath must be used within a MathProvider');
  }
  return context;
}; 