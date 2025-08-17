import React, { createContext, useContext, useState } from 'react';

interface AnimationContextType {
  skipAnimation: boolean;
  setSkipAnimation: (skip: boolean) => void;
  triggerSkipAnimation: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [skipAnimation, setSkipAnimation] = useState(false);

  const triggerSkipAnimation = () => {
    setSkipAnimation(true);
  };

  return (
    <AnimationContext.Provider value={{ 
      skipAnimation, 
      setSkipAnimation, 
      triggerSkipAnimation 
    }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimationContext must be used within AnimationProvider');
  }
  return context;
};
