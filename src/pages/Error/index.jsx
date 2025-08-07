import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import Expired from './Expired';
import NotActivated from './NotActivated';
import NotFound from './NotFound';

function Error() {
  const location = useLocation();
  const [code, setCode] = useState(null);

  useEffect(() => {
    const fetchErrorCode = async () => {
      const path = location.pathname;
      const fullUrl = `${process.env.REACT_APP_API_URL}${path}`;
      console.log(fullUrl);

      try {
        const res = await fetch(fullUrl);
        if (res.status === 200) return;

        const data = await res.json();
        setCode(data.code || 'UNKNOWN_ERROR');
      } catch (error) {
        console.error('Error fetching error code:', error);
        setCode('UNKNOWN_ERROR');
      }
    };

    fetchErrorCode();
  }, [location.pathname]);

  if (!code) return null;

  switch (code) {
    case 'URL_EXPIRED':
      return <Expired />;
    case 'URL_NOT_ACTIVATED':
      return <NotActivated />;
    case 'URL_NOT_FOUND':
    case 'UNKNOWN_ERROR':
    default:
      return <NotFound />;
  }
}

export default Error;
