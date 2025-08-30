import { Outlet } from 'react-router-dom';

import BackgroundWrapper from '../../components/Common/BackgroundWrapper';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header';
import PageLayout from '../../components/Common/PageLayout';
import ScrollToTop from '../../components/Common/ScrollToTop';
import Content from '../../components/MyPage/Content';
import Sidebar from '../../components/MyPage/Sidebar';

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
