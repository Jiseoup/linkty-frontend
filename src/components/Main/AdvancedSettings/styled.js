import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

import HelperText from '../../Common/HelperText';

export const FooterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(1),
}));

export const AliasHelperText = styled(HelperText)(({ theme }) => ({
  marginLeft: theme.spacing(1.75),
}));

export const ControlLabelBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginRight: theme.spacing(1),
}));

export const ControlLabel = styled(FormControlLabel)(({ theme }) => ({
  margin: theme.spacing(0),
  '& .MuiFormControlLabel-label': {
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
}));

export const ControlLabelCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
  '&.Mui-checked.Mui-disabled': {
    color: theme.palette.action.disabled,
  },
}));
