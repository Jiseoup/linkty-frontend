import { useState } from 'react';

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useNavigate } from 'react-router-dom';

import { getCopyrightText } from '../../../../utils/copyright';

import {
  StyledFooter,
  LeftContent,
  RightContent,
  Title,
  Copyright,
  LinkButton,
} from './styled';
import SupportDialog from './SupportDialog';

// Common Footer Component.
function Footer() {
  const navigate = useNavigate();

  const [isSupportOpen, setIsSupportOpen] = useState(false);

  // Support button click handler.
  const onSupportClick = () => {
    setIsSupportOpen(true);
  };

  // Support button close handler.
  const onSupportClose = () => {
    setIsSupportOpen(false);
  };

  // Privacy button click handler.
  const onPrivacyClick = () => {
    navigate('/privacy');
  };

  // Terms button click handler.
  const onTermsClick = () => {
    navigate('/terms');
  };

  return (
    <StyledFooter>
      {/* Footer left contents. */}
      <LeftContent>
        <Title>Linkty</Title>
        <Copyright>{getCopyrightText()}</Copyright>
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
          startIcon={<LibraryBooksIcon />}
          onClick={onTermsClick}
        />
      </RightContent>

      {/* Support dialog component. */}
      <SupportDialog isOpen={isSupportOpen} onClose={onSupportClose} />
    </StyledFooter>
  );
}

export default Footer;
