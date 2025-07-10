import React, { useState } from 'react';

import BackgroundWrapper from '../../components/Common/BackgroundWrapper';
import Card from '../../components/Common/Card';
import Footer from '../../components/Common/Footer';
import FormBox from '../../components/Common/FormBox';
import Header from '../../components/Common/Header';
import AdvancedSettings from '../../components/Main/AdvancedSettings';
import ShortenUrlBox from '../../components/Main/ShortenUrlBox';
import Title from '../../components/Main/Title';
import UrlShortener from '../../components/Main/UrlShortener';
import { useAlertContext } from '../../contexts/AlertContext';
import { postShortenUrl } from '../../services/shortenUrl';
import { formatDatetime } from '../../utils/datetime';

function Main() {
  const { showError } = useAlertContext();

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
      // TODO: Should add Error Handling. (올바른 URL을 입력해주세요?)
      showError(
        'URL 단축에 실패했습니다.',
        error.response?.data?.message || error.message
      );
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

          <FormBox onSubmit={onShortenButtonClick}>
            {/* URL Shortener Component. */}
            <UrlShortener
              originalUrl={originalUrl}
              setOriginalUrl={setOriginalUrl}
            />
            {/* 
            TODO: url은 http:// 또는 https://를 반드시 포함해야 합니다.
            helperText?
            또는 검증하여 경고 출력?
             */}

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
        <Footer />
      </BackgroundWrapper>
    </>
  );
}

export default Main;
