import { styled } from '@mui/material/styles';

import Button from '../../../Common/Button';

export const WithdrawButton = styled(Button)(({ theme }) => ({
  fontSize: 14,
  height: 40,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));
