import { getCopyrightText } from '../../../../utils/copyright';

import {
  PolicyWrapper,
  Header,
  HeaderToolbar,
  HeaderText,
  BodyContent,
  Footer,
  FooterText,
} from './styled';

function PolicyLayout({ title, titleIcon, lastUpdated, children }) {
  return (
    <PolicyWrapper>
      {/* Header contents. */}
      <Header>
        <HeaderToolbar>
          {titleIcon}
          <HeaderText>{title}</HeaderText>
        </HeaderToolbar>
      </Header>

      {/* Body contents. */}
      <BodyContent maxWidth="md">{children}</BodyContent>

      {/* Footer contents. */}
      <Footer>
        <FooterText>
          본 {title}은 <strong>{lastUpdated}</strong>에 최종 수정되었습니다.
        </FooterText>
        <FooterText sx={{ mt: 1 }}>{getCopyrightText()}</FooterText>
      </Footer>
    </PolicyWrapper>
  );
}

export default PolicyLayout;
