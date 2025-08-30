import { Box, Card, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Button from '../../../Common/Button';
import TextField from '../../../Common/TextField';

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

export const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

export const InfoLabel = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  color: theme.palette.text.secondary,
}));

export const InfoContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const InfoTextField = styled(TextField)({
  flex: 1,
  '& .MuiInputBase-root': {
    height: 40,
  },
});

export const InfoButton = styled(Button)({
  minWidth: 200,
  height: 40,
});

export const StatsBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
}));

export const StatsTitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const StatsTitle = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

export const StatsDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
}));

export const StatsRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1, 0),
}));

export const StatsLabel = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.2,
  color: theme.palette.text.secondary,
}));

export const StatsValue = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: 1.2,
  color: theme.palette.text.primary,
}));

export const StatsValuePrimary = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.2,
  color: theme.palette.primary.main,
}));

export const StatsValueSecondary = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.2,
  color: theme.palette.secondary.main,
}));
