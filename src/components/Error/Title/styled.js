import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const Image = styled('img')({
  width: 220,
  marginBottom: 28,
});

export const Message = styled(Typography)(({ theme }) => ({
  fontSize: 48,
  fontWeight: 700,
  color: theme.palette.primary.main,
  textAlign: 'center',
}));
