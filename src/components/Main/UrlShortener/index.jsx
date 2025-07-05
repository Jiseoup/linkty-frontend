import React from 'react';

import TextField from '../../Common/TextField';

import { ShortenButton } from './styled';

// Component for URL Shortening operations.
function UrlShortener({ originalUrl, setOriginalUrl }) {
  return (
    <>
      {/* URL Input TextField. */}
      <TextField
        type="url"
        placeholder="단축할 URL을 입력하세요."
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        required
      />

      {/* URL Shorten Button. */}
      <ShortenButton type="submit" variant="contained">
        단축하기
      </ShortenButton>
    </>
  );
}

export default UrlShortener;
