import { useState } from 'react';

import Card from '../../components/Common/Card';
import FormBox from '../../components/Common/FormBox';
import AdvancedSettings from '../../components/Main/AdvancedSettings';
import ShortenUrlBox from '../../components/Main/ShortenUrlBox';
import Title from '../../components/Main/Title';
import UrlShortener from '../../components/Main/UrlShortener';
import { useAccessTokenContext } from '../../contexts/AccessTokenContext';
import { useAlertContext } from '../../contexts/AlertContext';
import { parseErrorMessage } from '../../exceptions/errorParser';
import { postShortenUrl } from '../../services/shortenUrl';
import { formatDatetime } from '../../utils/datetime';

function Main() {
  const { alertError } = useAlertContext();
  const { accessToken } = useAccessTokenContext();

  const isLoggedIn = !!accessToken;
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
        alias: alias || null, // TODO: 로그인 유저일 경우, 새 단축 URL 등의 이름으로 생성
      });
      setShortenUrl(response.shortenUrl);
    } catch (error) {
      alertError({
        title: 'URL 단축에 실패했습니다.',
        message: parseErrorMessage(error),
      });
    }
  };

  return (
    <>
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
            isLoggedIn={isLoggedIn}
          />
        </FormBox>

        {/* Shorten URL Box Component. */}
        <ShortenUrlBox shortenUrl={shortenUrl} />
      </Card>
    </>
  );
}

export default Main;
