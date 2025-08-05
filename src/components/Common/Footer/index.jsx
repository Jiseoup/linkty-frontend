import { StyledFooter, FooterText } from './styled';

function Footer() {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();

  let footerYear = '';

  if (startYear === currentYear) {
    footerYear = `${startYear}.`;
  } else {
    footerYear = `${startYear}-${currentYear}.`;
  }

  return (
    <StyledFooter>
      <FooterText>© {footerYear} Linkty. All rights reserved.</FooterText>
    </StyledFooter>
  );
}

export default Footer;
