import { Alert, AlertTitle, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Button from '../../../Common/Button';
import TextField from '../../../Common/TextField';

export const HeaderAlert = styled(Alert)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 600,
  marginTop: theme.spacing(-1),
  marginBottom: theme.spacing(3),
}));

export const MessageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  gap: theme.spacing(0.5),
  marginBottom: theme.spacing(2),
}));

export const MainMessage = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

export const SubMessage = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  color: theme.palette.text.secondary,
}));

export const BodyAlert = styled(Alert)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const BodyAlertTitle = styled(AlertTitle)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}));

export const ListBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  margin: theme.spacing(0),
  paddingLeft: theme.spacing(2),
}));

export const ListItem = styled('li')({
  fontSize: 16,
  fontWeight: 400,
});

export const PasswordInput = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
  '& .MuiInputBase-root': {
    height: 48,
  },
}));

export const ActionButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(2),
}));

export const ActionButton = styled(Button)({
  height: 44,
});
