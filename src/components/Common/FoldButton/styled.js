import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  marginBottom: theme.spacing(1),
}));
