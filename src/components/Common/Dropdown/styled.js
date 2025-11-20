import { FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';

export const DropdownForm = styled(FormControl)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
