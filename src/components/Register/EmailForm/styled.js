import { FormHelperText } from '@mui/material';
import { styled } from '@mui/material/styles';

import Button from '../../Common/Button';

export const VerificationButton = styled(Button)({
  fontSize: '16px',
  fontWeight: '500',
  height: '56px',
  borderRadius: '8px',
  boxShadow: 'none',
  padding: '12px 24px',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  minWidth: '160px',
});

export const VerificationHelperText = styled(FormHelperText)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  marginLeft: theme.spacing(1.75),
  color: theme.palette.success.main,
}));
