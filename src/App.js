import { useState, React } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  const [nav, setNav] = useState(false);
  const [light, setLight] = useState(false);
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
