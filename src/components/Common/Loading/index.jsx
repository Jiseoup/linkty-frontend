import React, { useEffect } from 'react';

import { CircularProgress } from '@mui/material';

import {
  useLoadingContext,
  setLoadingContext,
} from '../../../contexts/LoadingContext';

import { StyledBackdrop } from './styled';

// Common Loading Component.
function Loading() {
  const { loading, setLoading } = useLoadingContext();

  // Register setLoading for global access.
  useEffect(() => {
    setLoadingContext({ setLoading });
  }, [setLoading]);

  return (
    <StyledBackdrop open={loading}>
      <CircularProgress size={60} color="inherit" />
    </StyledBackdrop>
  );
}

export default Loading;
