import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import HomeMobile from './components/HomeMobile';
import About from './components/About';
import AbouteMobile from './components/AboutMobile';
import ServicesMobile from './components/ServicesMobile';
import Services from './components/Services';
import ContactMobile from './components/ContactMobile';
import Contact from './components/Contact';
import FooterMobile from './components/FooterMobile';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import ShowServices from './components/services/ShowServices';
import Show from './components/services/Show';
import Loader from './components/Loading';


const MainCom = () => {


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [appMode, setAppMode] = useState('light');
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true);
=======
  const [isLoading, setIsLoading] = useState(false);
>>>>>>> 1e9fc4e (Initial clean commit (without secrets))
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const loadingInterval = setInterval(() => {
          setLoadingProgress(prevProgress => {
            const simulatedProgress = Math.min(prevProgress + 1, 100);

            if (simulatedProgress === 100) {
              clearInterval(loadingInterval);
              setTimeout(() => {
                setIsLoading(false);
              }, 100); // Adjust the duration as needed
            }

            return simulatedProgress;
          });
        }, 50); // Adjust the interval duration as needed

        // Simulate an asynchronous operation (e.g., fetching data from an API)
        // For demonstration purposes, using a setTimeout to simulate loading
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    let theme = localStorage.getItem('mode')
    setAppMode(theme)
    console.log(appMode);
  }, [appMode])


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      {
        isLoading ? (
          <Loader loadingProgress={loadingProgress}/>
        ) : (
          <>
            {isMobile ? <HomeMobile mode={appMode} /> : <Home mode={appMode} />}
            {isMobile ? <AbouteMobile mode={appMode} /> : <About mode={appMode} />}
            {isMobile ? <ServicesMobile mode={appMode} /> : <Services mode={appMode} />}
            {isMobile ? <ContactMobile mode={appMode} /> : <Contact mode={appMode} />}
            {isMobile ? <FooterMobile mode={appMode} /> : <Footer mode={appMode} />}
          </>
        )
      }

    </>
  )
}

export default MainCom