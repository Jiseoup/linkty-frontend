import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(4),
}));

export const TitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

export const TitleLogo = styled('img')({
  width: 30,
});

export const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: 32,
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

// TODO: MessageBox 컴포넌트 사용할지 고민중... 사용할 경우 Gap이나 MB 조정 필요할수도
export const MessageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  background: theme.palette.grey[50],
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
}));

export const Message = styled(Typography)(({ theme }) => ({
  flex: 1,
  fontSize: 16,
  fontWeight: 500,
  color: theme.palette.text.secondary,
}));
