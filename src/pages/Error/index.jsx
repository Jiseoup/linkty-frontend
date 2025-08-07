import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { ERROR_CODES } from '../../exceptions/errorCode';

import Expired from './Expired';
import NotActivated from './NotActivated';
import NotFound from './NotFound';

function Error() {
  const location = useLocation();

  const [errorCode, setErrorCode] = useState(null);

  // Trying to fetch error code based on the current URL path.
  useEffect(() => {
    const fetchErrorCode = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}${location.pathname}`
        );
        if (response.ok) return;

        const data = await response.json();
        setErrorCode(data.code || ERROR_CODES.URL_NOT_FOUND);
      } catch (error) {
        setErrorCode(ERROR_CODES.URL_NOT_FOUND);
      }
    };
    fetchErrorCode();
  }, [location.pathname]);

  // Don't render anything until error code is received.
  if (!errorCode) return null;

  // Render error page based on the error code.
  switch (errorCode) {
    case ERROR_CODES.URL_EXPIRED:
      return <Expired />;
    case ERROR_CODES.URL_NOT_ACTIVATED:
      return <NotActivated />;
    case ERROR_CODES.URL_NOT_FOUND:
    default:
      return <NotFound />;
  }
}

export default Error;
