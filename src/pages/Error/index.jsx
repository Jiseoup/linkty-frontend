import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import Expired from './Expired';
import NotActivated from './NotActivated';
import NotFound from './NotFound';

function ErrorPage() {
  const [code, setCode] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const errorCode = searchParams.get('code');
    if (errorCode) {
      setCode(errorCode);
    } else {
      setCode('URL_NOT_FOUND');
    }
  }, [searchParams]);

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
