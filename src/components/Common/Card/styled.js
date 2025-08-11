import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(5),
  background: '#FFFFFF',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
  borderRadius: theme.spacing(2.5),
  minWidth: '700px',
}));
