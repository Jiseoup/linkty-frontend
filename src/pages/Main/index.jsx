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
import { parseErrorMessage } from '../../exceptions/errorParser';
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

      const response = await postShortenUrl({
        originalUrl: originalUrl,
        activeDate: formattedActiveDate || null,
        expireDate: formattedExpireDate || null,
        alias: alias || null,
      });
      setShortenUrl(response.shortenUrl);
    } catch (error) {
      showError({
        title: 'URL 단축에 실패했습니다.',
        message: parseErrorMessage(error),
      });
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
