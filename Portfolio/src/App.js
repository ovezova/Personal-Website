import './App.css';
import '../node_modules/aos/dist/aos.css';
import React from 'react';

import Home from './components/Views/Home';
import About from './components/Views/About';
import Contact from './components/Views/Contact';
import Footer from './components/Views/Footer';
import Portfolio from './components/Views/Portfolio';
import AOS from 'aos';

function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
