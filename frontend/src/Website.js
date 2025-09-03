import { Outlet } from 'react-router-dom';

//Components
import Footer from './pages/header-footer/footer';
import Header from './pages/header-footer/header';
import ScrollToTop from './scrollToTop';

// Styling
import './styles/website.css';


function Website() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Website;
