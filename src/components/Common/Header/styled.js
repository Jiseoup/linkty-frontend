import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderWrapper = styled(Box)({
  width: '100%',
  height: 64,
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
  backgroundColor: '#ffffff',
  position: 'sticky',
  top: 0,
  zIndex: 100,
  display: 'flex',
  justifyContent: 'center',
});

export const HeaderInner = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

export const LogoWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  cursor: 'pointer',
});

export const UserButtonWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const UserButton = styled(Button)({
  fontSize: 14,
  fontWeight: 500,
  minWidth: 100,
  height: 36,
});
