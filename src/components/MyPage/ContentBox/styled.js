import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  padding: theme.spacing(3),
  maxHeight: '100%',
  overflowY: 'auto',
}));
