import { Outlet } from 'react-router-dom';

import BackgroundWrapper from '../../components/Common/Layout/BackgroundWrapper';
import Footer from '../../components/Common/Layout/Footer';
import Header from '../../components/Common/Layout/Header';
import PageLayout from '../../components/Common/Layout/PageLayout';
import ScrollToTop from '../../components/Common/Layout/ScrollToTop';
import Content from '../../components/MyPage/Layout/Content';
import Sidebar from '../../components/MyPage/Layout/Sidebar';

function MyPageLayout() {
  return (
    <PageLayout>
      <ScrollToTop />
      <Header />
      <BackgroundWrapper sx={{ flexDirection: 'row', gap: 3, padding: 3 }}>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </BackgroundWrapper>
      <Footer />
    </PageLayout>
  );
}

export default MyPageLayout;
