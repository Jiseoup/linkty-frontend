import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 68,
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
  backgroundColor: theme.palette.grey[50],
  position: 'sticky',
  top: 0,
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

export const ButtonWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});
