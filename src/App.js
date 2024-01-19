import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import FullPageTextSpinnerLoader from './components/FullSpinner';

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
    }, 3000);
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

  const handleClick = () => setNav(!nav);

    // Animation Variants for the blocks
    const blockVariants = {
      initial: { y: 10, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { duration: 0.8 } },
      exit: { y: -10, opacity: 0, transition: { duration: 0.5 } }
    };
  
    // Animation Variants for the text
    const textVariants = {
      initial: { scale: 0 },
      animate: { 
        scale: 1, 
        transition: { 
          delay: 0.8, 
          type: "spring", 
          stiffness: 260, 
          damping: 20 
        }
      },
      exit: { scale: 0, transition: { duration: 0.5 } }
    };
  
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
    </motion.div>
  );
}

export default App;
