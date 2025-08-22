import { Outlet } from 'react-router-dom';

import BackgroundWrapper from '../../components/Common/BackgroundWrapper';
import PageLayout from '../../components/Common/PageLayout';
import ScrollToTop from '../../components/Common/ScrollToTop';

function ErrorLayout() {
  return (
    <PageLayout>
      <ScrollToTop />
      <BackgroundWrapper>
        <Outlet />
      </BackgroundWrapper>
    </PageLayout>
  );
}

export default ErrorLayout;
