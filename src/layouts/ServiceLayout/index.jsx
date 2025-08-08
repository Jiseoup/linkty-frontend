import { Outlet } from 'react-router-dom';

import BackgroundWrapper from '../../components/Common/BackgroundWrapper';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header';
import PageLayout from '../../components/Common/PageLayout';

function ServiceLayout() {
  return (
    <PageLayout>
      <Header />
      <BackgroundWrapper>
        <Outlet />
      </BackgroundWrapper>
      <Footer />
    </PageLayout>
  );
}

export default ServiceLayout;
