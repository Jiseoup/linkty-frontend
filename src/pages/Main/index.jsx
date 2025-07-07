import React, { useState } from 'react';

import BackgroundWrapper from '../../components/Common/BackgroundWrapper';
import Card from '../../components/Common/Card';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header';
import AdvancedSettings from '../../components/Main/AdvancedSettings';
import ShortenUrlBox from '../../components/Main/ShortenUrlBox';
import Title from '../../components/Main/Title';
import UrlShortener from '../../components/Main/UrlShortener';
import { postShortenUrl } from '../../services/Url/postShortenUrl';
import { formatDatetime } from '../../utils/datetime';

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

      <BackgroundWrapper>
        <Card>
          {/* Main Page Title. */}
          <Title />

          <form style={{ width: '100%' }} onSubmit={onShortenButtonClick}>
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
          </form>

          {/* Shorten URL Box Component. */}
          <ShortenUrlBox shortenUrl={shortenUrl} />
        </Card>

        {/* Main Page Footer. */}
        <Footer />
      </BackgroundWrapper>
    </>
  );
}

export default Main;
