import { Snackbar, Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useToastContext } from '../../../contexts/ToastContext';

const getBgColor = (severity, theme) => {
  return theme.palette.alert?.[severity]?.main ?? null;
};

const Toast = () => {
  const theme = useTheme();

  const { toastState, hideToast } = useToastContext();

  return (
    <Snackbar
      open={toastState.isOpen}
      autoHideDuration={3000}
      onClose={hideToast}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        severity={toastState.severity}
        onClose={hideToast}
        variant="filled"
        sx={{
          backgroundColor: getBgColor(toastState.severity, theme),
          width: '100%',
        }}
      >
        {toastState.message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
