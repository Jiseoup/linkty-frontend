import React from 'react';

import { Image, Description } from './styled';

function Title() {
  return (
    <>
      {/* Title Logo Image. */}
      <Image src="/title_logo.png" alt="Linkty Logo" />

      {/* Title Description. */}
      <Description>
        Linkty는 무료로 이용할 수 있는 URL 단축 서비스입니다.
      </Description>
    </>
  );
}

export default Title;
