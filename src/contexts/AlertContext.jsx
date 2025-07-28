import { createContext, useContext, useState, useCallback } from 'react';

import Alert from '../components/Common/Alert';

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
  const alertInfo = ({ title, message, buttonText, onClose }) =>
    showAlert({ severity: 'info', title, message, buttonText, onClose });
  const alertSuccess = ({ title, message, buttonText, onClose }) =>
    showAlert({ severity: 'success', title, message, buttonText, onClose });
  const alertWarning = ({ title, message, buttonText, onClose }) =>
    showAlert({ severity: 'warning', title, message, buttonText, onClose });
  const alertError = ({ title, message, buttonText, onClose }) =>
    showAlert({ severity: 'error', title, message, buttonText, onClose });

  return (
    <AlertContext.Provider
      value={{
        alertState,
        showAlert,
        hideAlert,
        alertInfo,
        alertSuccess,
        alertWarning,
        alertError,
      }}
    >
      {children}
      <Alert />
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
