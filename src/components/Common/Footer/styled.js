import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledFooter = styled('footer')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 0',
  background: 'transparent',
});

export const FooterText = styled(Typography)({
  fontSize: 20,
  color: '#ffffff',
  opacity: 0.8,
});
