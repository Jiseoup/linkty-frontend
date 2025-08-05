import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import Expired from './Expired';
import NotActivated from './NotActivated';
import NotFound from './NotFound';

function ErrorPage() {
  const location = useLocation();
  const [code, setCode] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}${location.pathname}`)
      .then(async (response) => {
        if (!response.ok) {
          const data = await response.json();
          setCode(data.code);
        }
      })
      .catch(() => setCode('URL_NOT_FOUND'));
  }, [location.pathname]);

  if (!code) return null;

  switch (code) {
    case 'URL_EXPIRED':
      return <Expired />;
    case 'URL_NOT_ACTIVATED':
      return <NotActivated />;
    case 'URL_NOT_FOUND':
    default:
      return <NotFound />;
  }
}

export default ErrorPage;
