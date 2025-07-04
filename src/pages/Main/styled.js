import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MainWrapper = styled('div')({
  background: 'linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const MainCard = styled('div')({
  background: '#ffffff',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
  borderRadius: '20px',
  padding: '56px 48px',
  minWidth: '700px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const MainFooter = styled('footer')({
  marginTop: '40px',
  color: '#fff',
  fontSize: '20px',
  opacity: 0.8,
});

export const FormBox = styled(Box)({
  width: '100%',
});

export const RowBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));
