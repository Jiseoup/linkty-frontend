import ReCAPTCHA from 'react-google-recaptcha';

import { StyledBox } from './styled';

// Captcha Component.
function Captcha({ setCaptchaValue }) {
  return (
    <StyledBox>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY}
        onChange={setCaptchaValue}
      />
    </StyledBox>
  );
}

export default Captcha;
