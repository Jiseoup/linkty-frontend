import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import Button from '../../../Common/Button';
import TextField from '../../../Common/TextField';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  gap: theme.spacing(2),
}));

export const LeftSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-start',
  gap: theme.spacing(1.5),
}));

export const RightSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  gap: theme.spacing(1.5),
}));

export const SearchBox = styled(TextField)(({ theme }) => ({
  maxWidth: 400,
  backgroundColor: theme.palette.background.paper,
  '& .MuiInputBase-root': {
    height: 40,
  },
}));

export const ActionButton = styled(Button)({
  height: 40,
  whiteSpace: 'nowrap',
});
