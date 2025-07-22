import { Backdrop } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  color: '#FFFFFF',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  zIndex: theme.zIndex.drawer + 9999,
}));
