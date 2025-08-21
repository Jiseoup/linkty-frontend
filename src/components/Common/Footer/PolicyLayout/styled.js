import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PolicyWrapper = styled(Box)(({ theme }) => ({
  minWidth: 900,
  backgroundColor: theme.palette.grey[50],
}));

export const Header = styled(AppBar)({
  position: 'static',
  background: '#FFFFFF',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

export const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
  gap: theme.spacing(1.5),
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

export const BodyContent = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4), // TODO: 조정 필요할 수도 있음
}));

export const Footer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  paddingBottom: theme.spacing(4), // TODO: 조정 필요할 수도 있음
}));

export const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  color: theme.palette.text.secondary,
}));
