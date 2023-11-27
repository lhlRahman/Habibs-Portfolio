import { useState, React } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div className="App"> 
      <Navbar nav={nav} setNav={setNav} />
      <Home nav={nav} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </div>
    
  );
}

export default App;
