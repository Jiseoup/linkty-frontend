import { Box, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Button from '../../Common/Button';
import Card from '../../Common/Card';

export const ShortenUrlCard = styled(Card)(({ theme }) => ({
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginTop: theme.spacing(3),
  padding: theme.spacing(5),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3.5),
}));

export const GridBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 2px 1fr',
  columnGap: theme.spacing(3),
  alignItems: 'start',
  width: `calc(100% + ${theme.spacing(4)})`,
  margin: `0 ${theme.spacing(-2)}`,
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
}));

export const ContentDivider = styled(Divider)({
  width: 2,
});

export const Label = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 700,
  color: theme.palette.text.primary,
  letterSpacing: 0.5,
  marginBottom: theme.spacing(0.5),
}));

export const UrlText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 600,
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.grey[200]}`,
  backgroundColor: theme.palette.grey[50],
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5),
}));

export const UrlButton = styled(Button)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2.5),
}));

export const UrlButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1),
}));

export const DetailBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: `1px solid ${theme.palette.grey[200]}`,
  backgroundColor: theme.palette.grey[50],
  borderRadius: theme.spacing(1),
  padding: theme.spacing(0.75),
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
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

export const RegisterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gridColumn: '1 / -1',
  border: `1px solid ${theme.palette.secondary.main}`,
  backgroundColor: theme.palette.secondary.light,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5),
  marginTop: theme.spacing(2.5),
}));

export const RegisterText = styled(Typography)(({ theme }) => ({
  flex: 1,
  fontSize: 14,
  fontWeight: 400,
  color: theme.palette.text.primary,
}));

export const RegisterButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(2),
}));
