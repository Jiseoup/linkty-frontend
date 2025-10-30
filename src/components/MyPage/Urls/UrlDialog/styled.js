import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

import Button from '../../../Common/Button';

export const FormBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const RowFormBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1.5),
}));

export const CheckboxFormBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(2),
  marginLeft: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const Label = styled(Typography)(({ theme, required }) => ({
  fontSize: 16,
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  '&::after': required
    ? {
        content: '" *"',
        color: theme.palette.error.main,
      }
    : {},
}));

export const ControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: 14,
    color: theme.palette.text.primary,
  },
}));

export const ControlLabelCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
  '&.Mui-checked.Mui-disabled': {
    color: theme.palette.action.disabled,
  },
}));

export const FormButton = styled(Button)({
  height: 44,
});
