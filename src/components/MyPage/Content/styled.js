import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(0, 1),
}));

export const TitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: 28,
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

export const BodyContent = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));
