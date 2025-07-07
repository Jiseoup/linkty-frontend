import { styled } from '@mui/material/styles';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export const StyledDateTimePicker = styled(DateTimePicker)(({ theme }) => ({
  '& .Mui-disabled': {
    backgroundColor: '#f0f0f0',
  },
  '& .MuiInputLabel-root.Mui-disabled': {
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
  },
}));
