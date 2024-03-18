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
import Blog from './components/Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Leetcode from './BlogPosts/Leetcode';

function App() {
  const [nav, setNav] = useState(false);
  // Assume isLoading should be true initially only if it's not stored in sessionStorage
  const [isLoading, setIsLoading] = useState(!sessionStorage.getItem('loadingShown'));
  const [light, setLight] = useState(() => {
    const storedLight = localStorage.getItem('light');
    return storedLight !== null ? JSON.parse(storedLight) : false;
  });

  useEffect(() => {
    if (isLoading) {
      // Set a timeout for the spinner to hide
      const timer = setTimeout(() => {
        setIsLoading(false);
        // Once loading is finished, set 'loadingShown' in sessionStorage
        sessionStorage.setItem('loadingShown', 'true');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

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

    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const handleClick = () => setNav(!nav);

  // If isLoading is true, show the loading spinner
  if (isLoading) {
    return (
      <section className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r animate-pulse">
         <FullPageTextSpinnerLoader />
      </section>
    );
  }

  return (
    <Router>
      <motion.div className="App"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Navbar nav={nav} setNav={setNav} handleClick={handleClick} light={light} setLight={setLight} />
        <Routes>
          <Route path="/" element={<>
            <Home light={light} />
            <About light={light} />
            <Skills light={light} />
            <Projects light={light} />
            <Contact light={light} />
            <Footer light={light} />
          </>} />
          <Route path="/blog" element={<Blog light={light} />} />
          <Route path="/blog/leetcode" element={<Leetcode light={light} />} />
        </Routes>
      </motion.div>
    </Router>
  );
}

export default App;
