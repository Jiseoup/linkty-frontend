import React, { createContext, useContext, useState, useCallback } from 'react';

const AlertContext = createContext();

// Alert Context Provider.
export const AlertProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    isOpen: false,
    severity: null,
    title: null,
    message: null,
    buttonText: '확인',
  });

  // Displays an alert with the given configuration.
  const showAlert = useCallback(
    ({ severity, title, message, buttonText = '확인' }) => {
      setAlertState({
        isOpen: true,
        severity,
        title,
        message,
        buttonText,
      });
    },
    []
  );

  // Hides the currently displayed alert.
  const hideAlert = useCallback(() => {
    setAlertState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  // Helper functions to display alerts with predefined severities.
  const showInfo = (title, message, buttonText = '확인') =>
    showAlert({ severity: 'info', title, message, buttonText });
  const showSuccess = (title, message, buttonText = '확인') =>
    showAlert({ severity: 'success', title, message, buttonText });
  const showWarning = (title, message, buttonText = '확인') =>
    showAlert({ severity: 'warning', title, message, buttonText });
  const showError = (title, message, buttonText = '확인') =>
    showAlert({ severity: 'error', title, message, buttonText });

  return (
    <AlertContext.Provider
      value={{
        alertState,
        showAlert,
        hideAlert,
        showInfo,
        showSuccess,
        showWarning,
        showError,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
