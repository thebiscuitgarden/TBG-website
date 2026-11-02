import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import './styles/website.css';

//components
import Footer from './pages/header-footer/footer';
import Header from './pages/header-footer/header';
import SubHeader from './pages/header-footer/subHeader';
import ScrollToTop from './scrollToTop';
/*
*/

/*
function Website() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Show splash only on initial visit (path === "/") and only once
    if (!showSplash && location.pathname === '/') {
      setShowSplash(true);
    }
  }, [location.pathname, showSplash]);

  return (
    <div className="App">
      {showSplash && <div className="splash-screen"></div>}
    </div>
  );
}
*/

function Website() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
        <ScrollToTop />
        <Outlet />
      <Footer />
    </div>
  );
}
/*
*/

export default Website;
