import DescriptionIcon from '@mui/icons-material/Description';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useNavigate } from 'react-router-dom';

import {
  StyledFooter,
  LeftContent,
  RightContent,
  Title,
  Copyright,
  LinkButton,
} from './styled';

// Common Footer Component.
function Footer() {
  const navigate = useNavigate();

  // Privacy button click handler.
  const onPrivacyClick = () => {
    // TODO: Privacy 페이지 구현 필요
    navigate('/privacy');
  };

  // Terms button click handler.
  const onTermsClick = () => {
    // TODO: Terms 페이지 구현 필요
    navigate('/terms');
  };

  // Support button click handler.
  const onSupportClick = () => {
    // TODO: Support 모달? 구현 필요
  };

  // Get copyright year string.
  const getCopyrightYear = () => {
    const startYear = 2025;
    const currentYear = new Date().getFullYear();

    let copyrightYear = '';

    if (startYear === currentYear) {
      copyrightYear = `${startYear}.`;
    } else {
      copyrightYear = `${startYear}-${currentYear}.`;
    }

    return copyrightYear;
  };

  return (
    <StyledFooter>
      {/* Footer left contents. */}
      <LeftContent>
        <Title>Linkty</Title>
        <Copyright>
          COPYRIGHT © {getCopyrightYear()} Linkty. ALL RIGHTS RESERVED.
        </Copyright>
      </LeftContent>

      {/* Footer right contents. */}
      <RightContent>
        {/* Support Button. */}
        <LinkButton
          text="고객센터"
          variant="outlined"
          color="primary"
          startIcon={<SupportAgentIcon />}
          onClick={onSupportClick}
        />

        {/* Privacy Button. */}
        <LinkButton
          text="개인정보 처리방침"
          variant="outlined"
          color="primary"
          startIcon={<SecurityIcon />}
          onClick={onPrivacyClick}
        />

        {/* Terms Button. */}
        <LinkButton
          text="서비스 이용약관"
          variant="outlined"
          color="primary"
          startIcon={<DescriptionIcon />}
          onClick={onTermsClick}
        />
      </RightContent>
    </StyledFooter>
  );
}

export default Footer;
