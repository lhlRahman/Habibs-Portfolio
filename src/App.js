import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [nav, setNav] = useState(false);

  // Initialize the light state based on localStorage, default to false
  const [light, setLight] = useState(() => {
    const storedLight = localStorage.getItem('light');
    return storedLight !== null ? JSON.parse(storedLight) : false;
  });

  useEffect(() => {
    // Retrieve the stored nav state from localStorage
    const storedNav = localStorage.getItem('nav');
    if (storedNav) {
      setNav(JSON.parse(storedNav));
    }
  }, []);

  useEffect(() => {
    // Store the nav state in localStorage whenever it changes
    localStorage.setItem('nav', JSON.stringify(nav));
  }, [nav]);

  useEffect(() => {
    // Store the light state in localStorage whenever it changes
    localStorage.setItem('light', JSON.stringify(light));
  }, [light]);

  const handleClick = () => setNav(!nav);

  return (
    <div className="App"> 
      <Navbar nav={nav} setNav={setNav} handleClick={handleClick} light={light} setLight={setLight} />
      <Home light={light} />
      <About light={light} />
      <Skills light={light} />
      <Projects light={light} />
      <Contact light={light} />
    </div>
  );
}

export default App;
