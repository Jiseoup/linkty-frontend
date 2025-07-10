import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    borderRadius: 24,
    minWidth: 320,
    padding: 0,
  },
});

export const StyledDialogContent = styled(DialogContent)({
  textAlign: 'center',
  paddingTop: 40,
  paddingBottom: 16,
});

export const StyledDialogActions = styled(DialogActions)({
  justifyContent: 'center',
  paddingBottom: 24,
});

export const CenterBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 16,
});

export const IconCircle = styled(Box)(({ bgcolor }) => ({
  background: bgcolor,
  borderRadius: '50%',
  width: 80,
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 8,
}));

export const TitleText = styled(Typography)({
  fontWeight: 700,
  marginBottom: 8,
});

export const MessageText = styled(Typography)({
  color: '#444444',
  marginBottom: 12,
});

export const StyledButton = styled(Button)({
  minWidth: 100,
  borderRadius: 8,
  fontWeight: 600,
});
