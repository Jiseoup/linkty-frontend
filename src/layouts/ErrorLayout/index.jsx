import { Outlet } from 'react-router-dom';

import BackgroundWrapper from '../../components/Common/BackgroundWrapper';
import PageLayout from '../../components/Common/PageLayout';

function ErrorLayout() {
  return (
    <PageLayout>
      <BackgroundWrapper>
        <Outlet />
      </BackgroundWrapper>
    </PageLayout>
  );
}

export default ErrorLayout;
