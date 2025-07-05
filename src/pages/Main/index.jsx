import React, { useState } from 'react';

import Header from '../../components/common/Header';
import AdvancedSettings from '../../components/main/AdvancedSettings';
import ShortenUrlBox from '../../components/main/ShortenUrlBox';
import Title from '../../components/main/Title';
import UrlShortener from '../../components/main/UrlShortener';
import { postShortenUrl } from '../../services/shortenUrl';
import { formatDatetime } from '../../utils/datetime';

import { MainWrapper, MainCard, MainFooter, FormBox, RowBox } from './styled';

function Main() {
  const [shortenUrl, setShortenUrl] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');
  const [activeDate, setActiveDate] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [alias, setAlias] = useState('');

  const onShortenClick = async (e) => {
    e.preventDefault();

    try {
      const formattedActiveDate = formatDatetime(activeDate);
      const formattedExpireDate = formatDatetime(expireDate);

      const data = await postShortenUrl({
        originalUrl: originalUrl,
        activeDate: formattedActiveDate,
        expireDate: formattedExpireDate,
        alias: alias,
      });
      setShortenUrl(data.shortenUrl);
    } catch (error) {
      // Error Handling.
      console.error(error);
    }
  };

  return (
    <>
      {/* Main Header. */}
      <Header />

      <MainWrapper>
        <MainCard>
          {/* Main Title. */}
          <Title />

          <FormBox component="form" onSubmit={onShortenClick}>
            {/* URL Shortener Component. */}
            <RowBox>
              <UrlShortener
                originalUrl={originalUrl}
                setOriginalUrl={setOriginalUrl}
              />
            </RowBox>

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
        </MainCard>
        <MainFooter>© 2025 Linkty. All rights reserved.</MainFooter>
      </MainWrapper>
    </>
  );
}

export default Main;
