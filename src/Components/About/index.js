import React, { useState } from "react";
import img17 from "../../Images/undraw_medicine.svg";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column2,
  ImgWrap,
  Column1,
  TextWrapper,
  TopLine,
  Heading1,
  Heading2,
  Subtitel,
  BtnWrap,
  Img,
  ArrowForward,
  ArrowRight,
  AbBtnLink,
} from "./style";

const About = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <TopLine>ABOUT THIS PROJECT</TopLine>
                <Heading1>E-MAGAZINE</Heading1>
                <Heading2>FREE FOR EVERYONE</Heading2>
                <Subtitel>
                  covizine is a magazine, through which we update people about
                  covid 19 news and corona epidemic.
                </Subtitel>
                <BtnWrap>
                  <AbBtnLink
                    to="/aboutlm"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                  >
                    Learn More {hover ? <ArrowForward /> : <ArrowRight />}
                  </AbBtnLink>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img17} alt="healt care" />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
