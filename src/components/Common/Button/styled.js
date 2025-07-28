import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)({
  fontSize: 14,
  fontWeight: 500,
  minWidth: 100,
  height: 36,
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
});
