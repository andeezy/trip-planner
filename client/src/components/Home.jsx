import React, { useState } from 'react';
import NavBar from './NavBar.jsx';
import SideBar from './SideBar.jsx';
import HeroSection from './Hero';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
    </>
  )
}

export default Home;