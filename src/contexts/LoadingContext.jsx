import React, { createContext, useContext, useState } from 'react';

// Global variable to hold the setLoading function.
let globalSetLoading = null;

// Register the setLoading function globally.
export const setLoadingContext = ({ setLoading }) => {
  globalSetLoading = setLoading;
};

// Retrieve the globally registered setLoading function.
export const getLoadingContext = () => ({
  setLoading: globalSetLoading,
});

const LoadingContext = createContext();

// Loading Context Provider.
export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoadingContext = () => useContext(LoadingContext);
