import { Alert, Box, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Button from '../../../Common/Button';

export const SuccessAlert = styled(Alert)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 18,
  fontWeight: 500,
  marginTop: theme.spacing(-1.5),
  marginBottom: theme.spacing(1.5),
}));

export const UrlDisplayBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.grey[100],
  marginBottom: theme.spacing(1.5),
}));

export const UrlTitle = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 600,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(0.5),
}));

export const UrlText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 600,
  color: theme.palette.primary.main,
}));

export const UrlButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
}));

export const UrlButton = styled(Button)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2.5),
}));

export const ContentDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

export const DetailTitle = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 600,
  marginBottom: theme.spacing(1.5),
}));

export const DetailGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

export const DetailItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1.5),
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.spacing(1),
}));

export const DetailLabel = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 600,
  color: theme.palette.text.secondary,
}));

export const DetailValue = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  color: theme.palette.text.primary,
}));
