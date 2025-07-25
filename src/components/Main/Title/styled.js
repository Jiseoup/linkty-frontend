import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const Image = styled('img')({
  width: 320,
  marginBottom: 20,
});

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: 22,
  fontWeight: 500,
  color: '#888888',
  marginBottom: theme.spacing(3),
  textAlign: 'center',
}));
