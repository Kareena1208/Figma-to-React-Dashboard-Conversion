import React, { createContext, useContext, useState, useMemo } from 'react';

const MinimizeContext = createContext();

export function useMinimizeContext() {
  const context = useContext(MinimizeContext);
  if (!context) {
    throw new Error('useMinimizeContext must be used within a MinimizeContextProvider');
  }
  return context;
}

export function MinimizeContextProvider({ children }) {
  const [minimize, setMinimize] = useState(false);

  const value = useMemo(() => ({ minimize, setMinimize }), [minimize]);

  return (
    <MinimizeContext.Provider value={value}>
      {children}
    </MinimizeContext.Provider>
  );
}