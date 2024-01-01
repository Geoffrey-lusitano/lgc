import React from 'react';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Pro from './components/pro/Pro';
import Particular from './components/particular/Particular';
import Gaming from './components/gaming/Gaming';
import Contact from './components/contact/Contact';
import Footer from  './components/footer/Footer';

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Pro />
      <Particular />
      <Gaming />
      <Contact />
      <Footer />
    </>
  )
}

export default App
