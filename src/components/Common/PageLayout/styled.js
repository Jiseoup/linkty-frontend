import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageLayout = styled(Box)(({ theme }) => ({
  minHeight: theme.layout.main.height,
  display: 'flex',
  flexDirection: 'column',
}));
