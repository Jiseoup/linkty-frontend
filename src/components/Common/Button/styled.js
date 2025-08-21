import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  fontSize: 14,
  fontWeight: 500,
  minWidth: 100,
  height: 36,
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
  '& .MuiButton-startIcon': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .MuiButton-endIcon': {
    display: 'flex',
    alignItems: 'center',
  },
});
