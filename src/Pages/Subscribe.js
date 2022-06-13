import React, { useState } from "react";
import Subscribesec from "../Components/oursubscribetions";
import Ofooter from "../Components/Footer/Ofooter";
import Onavbar from "../Components/NavBar/Onavbar";
import SideBar from "../Components/SideBar";

const Subscribe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Onavbar toggle={toggle} />
      <Subscribesec />
      <Ofooter />
    </div>
  );
};

export default Subscribe;
