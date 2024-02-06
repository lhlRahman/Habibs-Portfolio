import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import FullPageTextSpinnerLoader from './components/FullSpinner';
import Footer from './components/Footer';

function App() {
  const [nav, setNav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [light, setLight] = useState(() => {
    const storedLight = localStorage.getItem('light');
    return storedLight !== null ? JSON.parse(storedLight) : false;
  });


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const storedNav = localStorage.getItem('nav');
    if (storedNav) {
      setNav(JSON.parse(storedNav));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('nav', JSON.stringify(nav));
  }, [nav]);

  useEffect(() => {
    localStorage.setItem('light', JSON.stringify(light));
  }, [light]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        document.title = "Habib's Portfolio";
      } else {
        document.title = '👋 Come back!';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);


  const handleClick = () => setNav(!nav);

  
    if (isLoading) {
      return (
        <section className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r  animate-pulse">
           <FullPageTextSpinnerLoader />
        </section>
      );
    }

  return (
    <motion.div className="App"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 1, ease: "easeOut" }}
    >
      <Navbar nav={nav} setNav={setNav} handleClick={handleClick} light={light} setLight={setLight} />
      <Home light={light} />
      <About light={light} />
      <Skills light={light} />
      <Projects light={light} />
      <Contact light={light} />
      <Footer light={light} />
    </motion.div>
  );
}

export default App;
