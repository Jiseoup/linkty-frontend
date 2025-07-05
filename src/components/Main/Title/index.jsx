import React from 'react';

import TitleLogo from '../../../assets/title_logo.svg';

import { Image, Description } from './styled';

function Title() {
  return (
    <>
      {/* Title Logo Image. */}
      <Image src={TitleLogo} alt="Linkty Logo" />

      {/* Title Description. */}
      <Description>
        Linkty는 무료로 이용할 수 있는 URL 단축 서비스입니다.
      </Description>
    </>
  );
}

export default Title;
