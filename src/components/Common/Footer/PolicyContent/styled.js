import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContentCard = styled(Card)(({ theme }) => ({
  overflow: 'hidden',
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(4),
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
}));

export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: '#FFFFFF',
  background: theme.palette.primary.main,
  padding: theme.spacing(1.5, 2),
  gap: theme.spacing(2),
}));

export const HeaderText = styled(Typography)({
  fontSize: 20,
  fontWeight: 700,
});

export const BodyContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(2),
  '&:last-child': {
    marginBottom: theme.spacing(0),
  },
}));

export const ContentTitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  gap: theme.spacing(1),
}));

export const ContentTitleText = styled(Typography)({
  fontSize: 16,
  fontWeight: 700,
});

export const ItemBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'hasTitle',
})(({ theme, hasTitle }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
  marginLeft: hasTitle ? theme.spacing(2.5) : theme.spacing(0),
}));

export const ItemText = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  color: theme.palette.text.secondary,
}));
