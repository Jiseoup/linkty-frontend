import React from 'react';

import { Outlet } from 'react-router-dom';

import BackgroundWrapper from './BackgroundWrapper';
import Footer from './Footer';
import Header from './Header';

function Layout() {
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

export default Layout;
