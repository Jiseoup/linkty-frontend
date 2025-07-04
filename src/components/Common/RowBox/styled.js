import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const RowBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));
