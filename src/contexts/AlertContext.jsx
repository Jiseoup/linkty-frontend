import { createContext, useContext, useState, useCallback } from 'react';

const AlertContext = createContext();

// Alert Context Provider.
export const AlertProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    isOpen: false,
    severity: null,
    title: null,
    message: null,
    buttonText: '확인',
    onClose: null,
  });

  // Displays an alert with the given configuration.
  const showAlert = useCallback(
    ({ severity, title, message, buttonText = '확인', onClose = null }) => {
      setAlertState({
        isOpen: true,
        severity,
        title,
        message,
        buttonText,
        onClose,
      });
    },
    []
  );

  // Hides the currently displayed alert.
  const hideAlert = useCallback(() => {
    setAlertState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  // Helper functions to display alerts with predefined severities.
  const showInfo = ({ title, message, buttonText, onClose }) =>
    showAlert({ severity: 'info', title, message, buttonText, onClose });
  const showSuccess = ({ title, message, buttonText, onClose }) =>
    showAlert({ severity: 'success', title, message, buttonText, onClose });
  const showWarning = ({ title, message, buttonText, onClose }) =>
    showAlert({ severity: 'warning', title, message, buttonText, onClose });
  const showError = ({ title, message, buttonText, onClose }) =>
    showAlert({ severity: 'error', title, message, buttonText, onClose });

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
