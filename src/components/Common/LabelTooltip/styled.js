import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { styled } from '@mui/material/styles';

export const Container = styled('span')({
  display: 'flex',
  alignItems: 'center',
});

export const HelpIcon = styled(HelpOutlineIcon)({
  cursor: 'help',
  fontSize: '16px',
  marginLeft: 4,
});
