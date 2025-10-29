import { FormHelperText } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HelperText = styled(FormHelperText)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));
