import { Box, Card, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme }) => ({
  flex: 1,
  minWidth: 400,
  maxWidth: 800,
  padding: theme.spacing(3),
}));

export const TitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: theme.palette.primary.main,
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

export const CardDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
