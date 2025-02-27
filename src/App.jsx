import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  );
};

export default App;