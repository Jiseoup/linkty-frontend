import { Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContactCard = styled(Card)(({ theme }) => ({
  color: '#FFFFFF',
  background: theme.palette.primary.main,
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  padding: theme.spacing(3, 4),
}));

export const TitleWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

export const TitleText = styled(Typography)({
  fontSize: 22,
  fontWeight: 700,
});

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(6),
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: theme.palette.primary.dark,
  borderRadius: theme.spacing(2),
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  flex: 1,
}));

export const LabelText = styled(Typography)({
  fontSize: 16,
  fontWeight: 500,
});

export const ValueText = styled(Typography)({
  fontSize: 16,
  fontWeight: 400,
});
