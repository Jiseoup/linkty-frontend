import {
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import Button from '../Button';

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

export const Footer = styled(DialogActions)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: theme.spacing(1.5, 3),
}));

export const ConfirmButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
}));
