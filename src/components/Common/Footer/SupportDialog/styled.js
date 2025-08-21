import {
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import Button from '../../Button';

export const DialogWrapper = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    width: '100%',
    maxWidth: 560,
    borderRadius: theme.spacing(2),
  },
}));

export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  position: 'relative',
}));

export const TitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  margin: '0 auto',
}));

export const TitleText = styled(DialogTitle)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 800,
  color: theme.palette.primary.main,
  margin: 0,
  padding: 0,
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  top: theme.spacing(1),
  right: theme.spacing(1),
  position: 'absolute',
}));

export const BodyContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3),
  paddingBottom: theme.spacing(2.5),
  '&.MuiDialogContent-dividers': {
    borderTop: `1.5px solid ${theme.palette.divider}`,
    borderBottom: `1.5px solid ${theme.palette.divider}`,
  },
}));

export const MessageBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2.5),
}));

export const MainMessage = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1.5),
}));

export const SubMessage = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 400,
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
}));

export const EmailBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  border: `1px solid ${theme.palette.primary.light}50`,
  borderRadius: theme.spacing(1.5),
  background: `${theme.palette.primary.light}20`,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2.5),
}));

export const EmailHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const EmailText = styled(Typography)({
  fontSize: 16,
  fontWeight: 600,
});

export const EmailAddress = styled(Box)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 600,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.spacing(0.5),
  background: `linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)`,
  padding: theme.spacing(1.5),
}));

export const EmailButton = styled(Button)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2.5),
}));

export const EmailButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1.5),
}));

export const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  gap: theme.spacing(1),
}));

export const InfoText = styled(Typography)({
  fontSize: 16,
  fontWeight: 400,
});

export const Footer = styled(DialogActions)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: theme.spacing(1.5, 3),
}));

export const ConfirmButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
}));
