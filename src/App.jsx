import React from 'react';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Particular from './components/particular/Particular';
import Tarifs from './components/tarifs/Tarifs';
// import Gaming from './components/gaming/Gaming';
import Contact from './components/contact/Contact';
import Footer from  './components/footer/Footer';

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Particular />
      <Tarifs />
      {/* <Gaming /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
