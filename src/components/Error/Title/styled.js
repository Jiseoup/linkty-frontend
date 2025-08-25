import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Image = styled('img')(({ theme }) => ({
  width: 260,
  marginBottom: theme.spacing(3),
}));

export const Message = styled(Typography)(({ theme }) => ({
  fontSize: 48,
  fontWeight: 700,
  color: theme.palette.primary.main,
  textAlign: 'center',
}));
