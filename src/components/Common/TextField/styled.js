import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .Mui-disabled': {
    backgroundColor: '#f0f0f0',
  },
  '& .MuiInputLabel-root.Mui-disabled': {
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
  },
}));
