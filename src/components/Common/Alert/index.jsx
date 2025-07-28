import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useTheme } from '@mui/material/styles';

import { useAlertContext } from '../../../contexts/AlertContext';

import {
  StyledDialog,
  StyledDialogContent,
  StyledDialogActions,
  CenterBox,
  IconCircle,
  TitleText,
  MessageText,
  StyledButton,
} from './styled';

// Get alert icon and color based on severity.
const getIcon = (severity, theme) => {
  const color = theme.palette.alert?.[severity]?.main;

  switch (severity) {
    case 'info':
      return <InfoOutlinedIcon sx={{ fontSize: 54, color }} />;
    case 'success':
      return <CheckCircleOutlineIcon sx={{ fontSize: 54, color }} />;
    case 'warning':
      return <WarningAmberIcon sx={{ fontSize: 54, color }} />;
    case 'error':
      return <ErrorOutlineIcon sx={{ fontSize: 54, color }} />;
    default:
      return null;
  }
};

// Get alert icon background color based on severity.
const getIconBgColor = (severity, theme) => {
  return theme.palette.alert?.[severity]?.light ?? null;
};

// Common Alert Component.
const Alert = () => {
  const theme = useTheme();

  const { alertState, hideAlert } = useAlertContext();
  const { isOpen, severity, title, message, buttonText, onClose } = alertState;

  return (
    <StyledDialog
      open={isOpen}
      onClose={() => {
        hideAlert();
        if (onClose) onClose();
      }}
      maxWidth="xs"
      fullWidth
      slotProps={{
        backdrop: { style: { backgroundColor: 'rgba(0,0,0,0.15)' } },
      }}
    >
      <StyledDialogContent>
        {/* Alert Icon. */}
        {severity && (
          <CenterBox>
            <IconCircle bgcolor={getIconBgColor(severity, theme)}>
              {getIcon(severity, theme)}
            </IconCircle>
          </CenterBox>
        )}

        {/* Alert Title. */}
        <TitleText>{title}</TitleText>

        {/* Alert Message. */}
        <MessageText>{message}</MessageText>
      </StyledDialogContent>

      <StyledDialogActions>
        {/* Alert Button. */}
        <StyledButton
          variant="contained"
          onClick={() => {
            hideAlert();
            if (onClose) onClose();
          }}
        >
          {buttonText}
        </StyledButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default Alert;
