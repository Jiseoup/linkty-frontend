import { Box, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

import Button from '../../Button';

export const StyledFooter = styled('footer')(({ theme }) => ({
  width: '100%',
  padding: '24px 40px',
  boxSizing: 'border-box',
  background: theme.palette.footer.background,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 'auto',
}));

export const LeftContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  minWidth: 0,
}));

export const RightContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  gap: theme.spacing(1.5),
  minWidth: 0,
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 700,
  color: theme.palette.footer.main,
}));

export const Copyright = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  color: theme.palette.footer.light,
}));

export const LinkButton = styled(Button)(({ theme }) => ({
  color: theme.palette.footer.light,
  border: `1px solid ${theme.palette.footer.light}`,
  '&:hover': {
    color: theme.palette.footer.main,
    borderColor: theme.palette.footer.main,
    backgroundColor: alpha(theme.palette.footer.main, 0.1),
  },
}));
