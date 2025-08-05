import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledFooter = styled('footer')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4, 0),
  background: 'transparent',
}));

export const FooterText = styled(Typography)({
  fontSize: 20,
  color: '#FFFFFF',
  opacity: 0.8,
});
