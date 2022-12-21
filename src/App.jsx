import React from 'react';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Pro from './components/pro/Pro';
import Particular from './components/particular/Particular';
import Web from './components/web/Web';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from  './components/footer/Footer';

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Pro />
      <Particular/>
      <Web />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
