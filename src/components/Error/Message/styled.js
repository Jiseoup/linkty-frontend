import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)({
  textAlign: 'center',
  marginTop: 20,
});

export const Title = styled(Typography)({
  fontSize: 24,
  fontWeight: 500,
  color: '#222222',
  marginBottom: 20,
});

export const BasicMessage = styled(Typography)({
  fontSize: 20,
  fontWeight: 400,
  color: '#555555',
});
