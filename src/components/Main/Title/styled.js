import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Image = styled('img')(({ theme }) => ({
  width: 320,
  marginBottom: theme.spacing(2.5),
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: 22,
  fontWeight: 500,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
  textAlign: 'center',
}));
