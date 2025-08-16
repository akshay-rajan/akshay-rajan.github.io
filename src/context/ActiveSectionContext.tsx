import React, { createContext, useContext } from 'react';
import { useActiveSection } from '../hooks/activeSection';

const ActiveSectionContext = createContext<string>('');

export const ActiveSectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const activeSection = useActiveSection();

  return (
    <ActiveSectionContext.Provider value={activeSection}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  return useContext(ActiveSectionContext);
};
