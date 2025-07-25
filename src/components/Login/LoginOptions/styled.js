import { FormControlLabel, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

import RowBox from '../../Common/RowBox';

export const LoginOptionsBox = styled(RowBox)({
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginLeft: theme.spacing(-1),
  '& .MuiFormControlLabel-label': {
    color: theme.palette.link.main,
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.link.main,
  textDecorationColor: theme.palette.link.main,
  textDecorationThickness: '0.5px',
  textUnderlineOffset: '2px',
  '&:hover': {
    color: theme.palette.link.hover,
    textDecorationColor: theme.palette.link.hover,
  },
}));
