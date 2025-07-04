import React, { useState } from 'react';

import TitleLogo from '../../assets/title_logo.svg';
import Header from '../../components/Common/Header';
import AdvancedSettings from '../../components/Main/AdvancedSettings';
import ShortenUrlBox from '../../components/Main/ShortenUrlBox';
import UrlShortener from '../../components/Main/UrlShortener';
import { postShortenUrl } from '../../services/shortenUrl';
import { formatDatetime } from '../../utils/datetime';

import {
  MainWrapper,
  MainCard,
  MainDescription,
  MainFooter,
  FormBox,
} from './styled';

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
      {/* Header Component. */}
      <Header />

      <MainWrapper>
        <MainCard>
          {/* Title Logo. */}
          <img
            src={TitleLogo}
            alt="Linkty Title Logo"
            width={320}
            style={{ marginBottom: '20px' }}
          />

          {/* Main Description. */}
          <MainDescription>
            Linkty는 무료로 이용할 수 있는 URL 단축 서비스입니다.
          </MainDescription>

          <FormBox component="form" onSubmit={onShortenClick}>
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
        </MainCard>
        <MainFooter>© 2025 Linkty. All rights reserved.</MainFooter>
      </MainWrapper>
    </>
  );
}

export default Main;
