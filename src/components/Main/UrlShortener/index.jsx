import React from 'react';

import { TextField } from '@mui/material';

import RowBox from '../../Common/RowBox';

import { ShortenButton } from './styled';

// Component for URL Shortening.
function UrlShortener({ originalUrl, setOriginalUrl }) {
  return (
    <RowBox>
      {/* URL Input TextField. */}
      <TextField
        type="url"
        placeholder="단축할 URL을 입력하세요."
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        required
        fullWidth
        size="medium"
        variant="outlined"
      />

      {/* URL Shorten Button. */}
      <ShortenButton type="submit" variant="contained">
        단축하기
      </ShortenButton>
    </RowBox>
  );
}

export default UrlShortener;
