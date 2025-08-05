import { Outlet } from 'react-router-dom';

import BackgroundWrapper from '../../components/Common/BackgroundWrapper';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header';

function ServiceLayout() {
  return (
    <>
      <Header />
      <BackgroundWrapper>
        <Outlet />
        <Footer />
      </BackgroundWrapper>
    </>
  );
}

export default ServiceLayout;
