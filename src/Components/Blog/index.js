import React, { useState } from "react";
import OsideBar from "../SideBar/Osidebar";
import Onavbar from "../NavBar/Onavbar";
import Ofooter from "../Footer/Ofooter";
import Icon1 from "../../Images/Blogimg/wuhan-11-ap.jpg";
import Icon2 from "../../Images/Blogimg/virus-times-square-reuters.jpg";
import Icon3 from "../../Images/Blogimg/London_Coronavirus_AP.jpg";
import Icon4 from "../../Images/Blogimg/delhi-covid19-pti.jpg";
import Icon5 from "../../Images/Blogimg/mumbai.webp";
import Icon6 from "../../Images/Blogimg/bhopal.webp";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  ArrowForward,
  ArrowRight,
  LmbBtnLink,
} from "./style";

const Blog = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <OsideBar isOpen={isOpen} toggle={toggle} />
      <Onavbar toggle={toggle} />
      <ServicesContainer>
        <ServicesH1>blog</ServicesH1>
        <ServicesWrapper>
          <ServicesCard to="blogger1">
            <ServicesIcon src={Icon1} alt="wuhan" />
            <ServicesP>
              Coronavirus detected in Wuhan in late December 2019: <br />
              China
            </ServicesP>
          </ServicesCard>
          <ServicesCard to="blogger2">
            <ServicesIcon src={Icon2} alt="New york" />
            <ServicesP>
              New York bans gatherings, nonessential workers to stay home over
              coronavirus
            </ServicesP>
          </ServicesCard>
          <ServicesCard to="blogger3">
            <ServicesIcon src={Icon3} alt="london" />
            <ServicesP>
              London put on COVID-19 watchlist as coronavirus infection rate
              rises again across UK
            </ServicesP>
          </ServicesCard>
          <ServicesCard to="blogger4">
            <ServicesIcon src={Icon4} alt="dehli" />
            <ServicesP>
              Delhi records 6,725 new cases of Covid-19, its highest single-day
              <br /> spike
            </ServicesP>
          </ServicesCard>
          <ServicesCard to="blogger5">
            <ServicesIcon src={Icon5} alt="mumbai" />
            <ServicesP>
              Mumbai city reports 59 COVID deaths 7 critical patients admitted
              to ICU in Thane shifted due to oxygen shortage
            </ServicesP>
          </ServicesCard>
          <ServicesCard to="blogger6">
            <ServicesIcon src={Icon6} alt="bhopal" />
            <ServicesP>
              MP: Curfew Extended in Bhopal and Berasia Till May 24 to Contain
              Covid-19 Spread
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
        <LmbBtnLink
          to="blogger"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"
        >
          Learn More {hover ? <ArrowForward /> : <ArrowRight />}
        </LmbBtnLink>
      </ServicesContainer>
      <Ofooter />
    </>
  );
};

export default Blog;
