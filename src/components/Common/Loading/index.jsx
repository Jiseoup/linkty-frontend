import React from 'react';

import { CircularProgress } from '@mui/material';

import { StyledBackdrop } from './styled';

function Loading({ isOpen = false }) {
  return (
    <StyledBackdrop open={isOpen}>
      <CircularProgress size={60} color="inherit" />
    </StyledBackdrop>
  );
}

export default Loading;
