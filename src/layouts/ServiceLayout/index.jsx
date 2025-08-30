import { Outlet } from 'react-router-dom';

import BackgroundWrapper from '../../components/Common/Layout/BackgroundWrapper';
import Footer from '../../components/Common/Layout/Footer';
import Header from '../../components/Common/Layout/Header';
import PageLayout from '../../components/Common/Layout/PageLayout';
import ScrollToTop from '../../components/Common/Layout/ScrollToTop';

function ServiceLayout() {
  return (
    <PageLayout>
      <ScrollToTop />
      <Header />
      <BackgroundWrapper>
        <Outlet />
      </BackgroundWrapper>
      <Footer />
    </PageLayout>
  );
}

export default ServiceLayout;
