import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContentWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 800,
  height: theme.layout.mypage.height,
  background: theme.palette.grey[100],
  borderRadius: theme.spacing(1),
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
  overflow: 'hidden',
}));
