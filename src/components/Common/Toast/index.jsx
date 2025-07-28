import { Snackbar, Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useToastContext } from '../../../contexts/ToastContext';

// Get toast message background color based on severity.
const getBgColor = (severity, theme) => {
  return theme.palette.alert?.[severity]?.main ?? theme.palette.alert.default;
};

// Common Toast Component.
const Toast = () => {
  const theme = useTheme();

  const { toastState, hideToast } = useToastContext();
  const { isOpen, severity, message } = toastState;

  return (
    <Snackbar
      open={isOpen}
      onClose={hideToast}
      autoHideDuration={2500}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        severity={severity}
        onClose={hideToast}
        variant="filled"
        sx={{
          width: '100%',
          backgroundColor: getBgColor(severity, theme),
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
