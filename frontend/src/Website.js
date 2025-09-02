import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

//Components
import Footer from './pages/header-footer/footer';
import Header from './pages/header-footer/header';
import ScrollToTop from './scrollToTop';

// Styling
import './styles/website.css';


function Website() {
  // To make sure the BE API does not spin down after 15 minutes
    // Set Interval if 
  useEffect(() => {
    const ping_interval = 14 * 60 * 1000

    const health_ping = async () => {
      try{
        console.log('Ping BE API')
        await axios.get(`${process.env.REACT_APP_API}/email-form`)
          .then(res => { console.log('Keep-alive ping Success:', res)})
          .catch(err => console.log("Keep-alive ping Failed:", err))
      }
      catch(err){
        console.error("Keep-alive ping failed:", err)
      }
    }
    
    // Initial ping when user opens web page
    health_ping()
    // 14 Minute Interval Pings after while web page is open
    const interval = setInterval(health_ping, ping_interval);
    return () => clearInterval(interval)
  }, [])


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
