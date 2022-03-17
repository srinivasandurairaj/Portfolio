import { useState } from 'react';

import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Testimonials from './components/testimonials/Testimonials';
import TopBar from './components/topBar/TopBar.jsx';
import Works from './components/works/Works.jsx';
import Menu from './components/menu/Menu.jsx';


import './style.scss'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
