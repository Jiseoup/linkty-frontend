import React from 'react';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

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

// Get alert icon based on severity.
const getIcon = (severity) => {
  switch (severity) {
    case 'info':
      return <InfoOutlinedIcon sx={{ fontSize: 54, color: '#2196f3' }} />;
    case 'success':
      return <CheckCircleOutlineIcon sx={{ fontSize: 54, color: '#4caf50' }} />;
    case 'warning':
      return <WarningAmberIcon sx={{ fontSize: 54, color: '#ff9800' }} />;
    case 'error':
      return <ErrorOutlineIcon sx={{ fontSize: 54, color: '#f44336' }} />;
    default:
      return null;
  }
};

// Get alert icon background color based on severity.
const getIconBgColor = (severity) => {
  switch (severity) {
    case 'info':
      return '#eaf1fb';
    case 'success':
      return '#eaf7ea';
    case 'warning':
      return '#fff4e5';
    case 'error':
      return '#fdeaea';
    default:
      return null;
  }
};

// Common Alert Component.
const Alert = () => {
  const { alertState, hideAlert } = useAlertContext();
  const { isOpen, severity, title, message, buttonText, onClose } = alertState;

  return (
    <StyledDialog
      open={isOpen}
      onClose={hideAlert}
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
            <IconCircle bgcolor={getIconBgColor(severity)}>
              {getIcon(severity)}
            </IconCircle>
          </CenterBox>
        )}

        {/* Alert Title. */}
        <TitleText variant="h6">{title}</TitleText>

        {/* Alert Message. */}
        <MessageText variant="body2">{message}</MessageText>
      </StyledDialogContent>

      <StyledDialogActions>
        {/* Alert Button. */}
        <StyledButton
          variant="contained"
          onClick={() => {
            hideAlert();
            // Execute onClose callback if it exists.
            if (onClose) {
              onClose();
            }
          }}
        >
          {buttonText}
        </StyledButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default Alert;
