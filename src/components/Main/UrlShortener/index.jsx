import React from 'react';

import TextField from '../../Common/TextField';
import RowBox from '../RowBox';

import { ShortenButton } from './styled';

// Component for URL Shortening operations.
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
      />

      {/* URL Shorten Button. */}
      <ShortenButton text="단축하기" type="submit" variant="contained" />
    </RowBox>
  );
}

export default UrlShortener;
