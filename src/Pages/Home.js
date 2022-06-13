import React, { useState } from "react";
import About from "../Components/About";
import Contact from "../Components/Contact";
import HeroSection from "../Components/FirstSection";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import OurServices from "../Components/OurServices";
import Precaution from "../Components/SecondSection";
import SideBar from "../Components/SideBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <Precaution />
      <About />
      <OurServices />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
