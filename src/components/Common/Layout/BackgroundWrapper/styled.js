import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BackgroundWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  padding: '50px 20px',
  background: `linear-gradient(135deg, ${theme.gradient.primary.background})`,
}));
