import { Outlet } from 'react-router-dom';

import BackgroundWrapper from '../../components/Common/Layout/BackgroundWrapper';
import PageLayout from '../../components/Common/Layout/PageLayout';
import ScrollToTop from '../../components/Common/Layout/ScrollToTop';

function StandaloneLayout() {
  return (
    <PageLayout>
      <ScrollToTop />
      <BackgroundWrapper>
        <Outlet />
      </BackgroundWrapper>
    </PageLayout>
  );
}

export default StandaloneLayout;
