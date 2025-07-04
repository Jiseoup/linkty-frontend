import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

export const UrlBox = styled(Box)(({ theme }) => ({
  background: '#f5f6fa',
  borderRadius: '8px',
  padding: '12px 20px',
  gap: '8px',
  marginTop: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
}));

export const UrlLabel = styled(Typography)({
  color: '#222222',
  fontSize: '16px',
});

export const UrlLink = styled(Link)({
  color: '#6a82fb',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});
