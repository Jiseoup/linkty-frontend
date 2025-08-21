import { styled } from '@mui/material/styles';

import Button from '../../Common/Button';

export const ShortenButton = styled(Button)({
  background: 'linear-gradient(90deg, #6A82FB 0%, #FC5C7D 100%)',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '700',
  height: '56px',
  borderRadius: '8px',
  padding: '12px 24px',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  minWidth: '110px',
  '&:hover': {
    background: 'linear-gradient(90deg, #FC5C7D 0%, #6A82FB 100%)',
  },
});
