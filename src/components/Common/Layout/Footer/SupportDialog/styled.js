import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Button from '../../../Button';

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
  color: theme.gradient.secondary.contrastText,
  borderRadius: theme.spacing(0.5),
  background: `linear-gradient(135deg, ${theme.gradient.secondary.background})`,
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
