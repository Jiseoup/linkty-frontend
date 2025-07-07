import React, { useState } from 'react';

import Header from '../../components/Common/Header';
import AdvancedSettings from '../../components/Main/AdvancedSettings';
import ShortenUrlBox from '../../components/Main/ShortenUrlBox';
import Title from '../../components/Main/Title';
import UrlShortener from '../../components/Main/UrlShortener';
import { postShortenUrl } from '../../services/shortenUrl';
import { formatDatetime } from '../../utils/datetime';

import { Wrapper, Card, Footer, FormBox } from './styled';

function Main() {
  const [shortenUrl, setShortenUrl] = useState(null);
  const [originalUrl, setOriginalUrl] = useState(null);
  const [activeDate, setActiveDate] = useState(null);
  const [expireDate, setExpireDate] = useState(null);
  const [alias, setAlias] = useState(null);

  // Shorten URL Button Click Handler.
  const onShortenButtonClick = async (e) => {
    e.preventDefault();

    try {
      const formattedActiveDate = formatDatetime(activeDate);
      const formattedExpireDate = formatDatetime(expireDate);

      const data = await postShortenUrl({
        originalUrl: originalUrl,
        activeDate: formattedActiveDate || null,
        expireDate: formattedExpireDate || null,
        alias: alias || null,
      });
      setShortenUrl(data.shortenUrl);
    } catch (error) {
      // TODO: Should add Error Handling.
      console.error(error);
    }
  };

  return (
    <>
      {/* Main Page Header. */}
      <Header />

      <Wrapper>
        <Card>
          {/* Main Page Title. */}
          <Title />

          <FormBox component="form" onSubmit={onShortenButtonClick}>
            {/* URL Shortener Component. */}
            <UrlShortener
              originalUrl={originalUrl}
              setOriginalUrl={setOriginalUrl}
            />

            {/* Advanced Settings Component. */}
            <AdvancedSettings
              activeDate={activeDate}
              expireDate={expireDate}
              alias={alias}
              setActiveDate={setActiveDate}
              setExpireDate={setExpireDate}
              setAlias={setAlias}
            />
          </FormBox>

          {/* Shorten URL Box Component. */}
          <ShortenUrlBox shortenUrl={shortenUrl} />
        </Card>

        {/* Main Page Footer. */}
        <Footer>© 2025 Linkty. All rights reserved.</Footer>
      </Wrapper>
    </>
  );
}

export default Main;
