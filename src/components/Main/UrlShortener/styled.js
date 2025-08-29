import { styled } from '@mui/material/styles';

import Button from '../../Common/Button';

export const ShortenButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.gradient.primary.background})`,
  color: theme.gradient.primary.contrastText,
  fontSize: '16px',
  fontWeight: '700',
  height: '56px',
  borderRadius: '8px',
  padding: '12px 24px',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  minWidth: '110px',
  '&:hover': {
    background: `linear-gradient(270deg, ${theme.gradient.primary.background})`,
  },
}));
