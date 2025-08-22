import { Outlet } from 'react-router-dom';

import BackgroundWrapper from '../../components/Common/BackgroundWrapper';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header';
import PageLayout from '../../components/Common/PageLayout';
import ScrollToTop from '../../components/Common/ScrollToTop';

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
