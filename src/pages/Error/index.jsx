import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import Expired from './Expired';
import NotActivated from './NotActivated';
import NotFound from './NotFound';

function ErrorPage() {
  const { shortenUrl } = useParams();
  const [code, setCode] = useState(null);

  useEffect(() => {
    fetch(`/${shortenUrl}`)
      .then(async (response) => {
        if (response.ok) {
          return;
        }
        try {
          const data = await response.json();
          setCode(data.code);
        } catch {
          setCode('URL_NOT_FOUND');
        }
      })
      .catch(() => setCode('URL_NOT_FOUND'));
  }, [shortenUrl]);

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
