import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AccountContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(2),
}));
