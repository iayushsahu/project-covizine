import React, { useState } from "react";
import img00 from "../../Images/Background.jpg";
import {
  Herocontainer,
  HeroBg,
  Img,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroContent,
  ArrowForward,
  ArrowRight,
  FsButton,
} from "./style";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <Herocontainer>
      <HeroBg>
        <Img src={img00} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Covid-19 Pandemic</HeroH1>
        <HeroP>
          Coronavirus disease (COVID-19) is an infectious disease caused by a
          newly discovered coronavirus. Most people infected with the COVID-19
          virus will experience mild to moderate respiratory illness and recover
          without requiring special treatment.
        </HeroP>
        <HeroBtnWrapper>
          <FsButton
            to="/covidlm"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Learn More {hover ? <ArrowForward /> : <ArrowRight />}
          </FsButton>
        </HeroBtnWrapper>
      </HeroContent>
    </Herocontainer>
  );
};

export default HeroSection;
