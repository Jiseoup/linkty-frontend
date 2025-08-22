import { Alert, Card, Chip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DescriptionCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
}));

export const EffectiveDateChip = styled(Chip)(({ theme }) => ({
  padding: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 400,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

export const AlertBox = styled(Alert)(({ theme }) => ({
  borderRadius: theme.spacing(1),
}));

export const AlertText = styled(Typography)({
  fontSize: 14,
  fontWeight: 400,
});
