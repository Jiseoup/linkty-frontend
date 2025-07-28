import { createContext, useContext, useState, useCallback } from 'react';

import Toast from '../components/Common/Toast';

const ToastContext = createContext();

// Toast Context Provider.
export const ToastProvider = ({ children }) => {
  const [toastState, setToastState] = useState({
    isOpen: false,
    severity: null,
    message: null,
  });

  // Displays a toast message with the given configuration.
  const showToast = useCallback(({ severity, message }) => {
    setToastState({ isOpen: true, severity, message });
  }, []);

  // Hides the currently displayed toast message.
  const hideToast = useCallback(() => {
    setToastState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  // Helper functions to display toast messages with predefined severities.
  const toastInfo = ({ message }) => showToast({ severity: 'info', message });
  const toastSuccess = ({ message }) =>
    showToast({ severity: 'success', message });
  const toastWarning = ({ message }) =>
    showToast({ severity: 'warning', message });
  const toastError = ({ message }) => showToast({ severity: 'error', message });

  return (
    <ToastContext.Provider
      value={{
        toastState,
        showToast,
        hideToast,
        toastInfo,
        toastSuccess,
        toastWarning,
        toastError,
      }}
    >
      {children}
      <Toast />
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
