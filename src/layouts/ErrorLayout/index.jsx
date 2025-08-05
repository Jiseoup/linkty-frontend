import { Outlet } from 'react-router-dom';

import BackgroundWrapper from '../../components/Common/BackgroundWrapper';

function ErrorLayout() {
  return (
    <>
      <BackgroundWrapper>
        <Outlet />
      </BackgroundWrapper>
    </>
  );
}

export default ErrorLayout;
