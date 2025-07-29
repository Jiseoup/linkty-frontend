import { UrlBox, UrlLabel, UrlLink } from './styled';

// Component for showing the Shorten URL.
function ShortenUrlBox({ shortenUrl }) {
  if (!shortenUrl) return null;

  const fullUrl = `${process.env.REACT_APP_BASE_URL}/${shortenUrl}`;

  return (
    <UrlBox>
      {/* URL Label. */}
      {/* <UrlLabel>단축 URL : </UrlLabel> */}
      <UrlLabel>깃허브 액션 테스트 : </UrlLabel>

      {/* URL Link. */}
      <UrlLink href={fullUrl} target="_blank" rel="noopener noreferrer">
        {fullUrl}
      </UrlLink>
    </UrlBox>
  );
}

export default ShortenUrlBox;
