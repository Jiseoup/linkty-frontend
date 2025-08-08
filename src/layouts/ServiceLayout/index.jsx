import { Outlet } from 'react-router-dom';

import BackgroundWrapper from '../../components/Common/BackgroundWrapper';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header';

function ServiceLayout() {
  return (
    <>
      <Header />
      <BackgroundWrapper style={{ flex: 1 }}>
        <Outlet />
      </BackgroundWrapper>
      <Footer />
    </>
  );
}

export default ServiceLayout;
