import React, { useState } from "react";
import Onavbar from "../NavBar/Onavbar";
import Ofooter from "../Footer/Ofooter";
import img17 from "../../Images/undraw_developer_activity_bv83.svg";
import img18 from "../../Images/Aboutimgmy/Ayush.jpeg";
import img19 from "../../Images/Aboutimgmy/tushar.jpeg";
import img20 from "../../Images/Aboutimgmy/megha.jpeg";
import OsideBar from "../SideBar/Osidebar";
import {
  AboutContainer,
  AboutRow,
  AboutWrapper,
  Column1,
  Heading,
  TextWrapper,
  TextWrapper2,
  TopLine,
  TopLine1,
  Subtitel,
  Subtitel2,
  Column2,
  ImgWrap,
  Img,
  Img1,
  NavItem,
  NavItemC,
  NavLinks,
  NavLinkt,
  NavMenu,
  ImgWrap2,
} from "./style";

const Ablm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <OsideBar isOpen={isOpen} toggle={toggle} />
      <Onavbar toggle={toggle} />
      <AboutContainer>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <Heading>about covizine project</Heading>
              <TextWrapper>
                <TopLine>OBJECTIVE</TopLine>
                <Subtitel>
                  This website is based on the topic of a corona epidemic,
                  Covid-19 epidemic and to awaken them. the purpose of making
                  this website is to tell people about the
                </Subtitel>
              </TextWrapper>
              <TextWrapper>
                <TopLine>NAVIGATE</TopLine>
                <Subtitel>
                  On the landing page of the website you get some options of
                  HOME, BLOG, PRECUTION, ABOUT and CONTACT in the navigation
                  bar, On scrolling down the website, you have been told the
                  precution of covid 19, which you can avoid covid 19 by
                  adopting it and if you are infected, you can protect yourself.
                  By scrolling down you will get the page of contact us.
                </Subtitel>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img17} atl="developer" />
              </ImgWrap>
            </Column2>
          </AboutRow>
          <TextWrapper2>
            <TopLine1>DESIGNER</TopLine1>
            <Subtitel2>
              <NavMenu>
                <NavItem>
                  <ImgWrap2>
                    <Img1 src={img18} atl="Ayush sahu" />
                  </ImgWrap2>
                  <NavLinks>
                    Ayush Sahu <br />
                    (0112IT181008)
                  </NavLinks>
                </NavItem>
                <NavItemC>
                  <ImgWrap2>
                    <Img1 src={img19} atl="Tushar Kushwaha" />
                  </ImgWrap2>
                  <NavLinkt>
                    Tushar Kushwaha <br />
                    (0112IT18036)
                  </NavLinkt>
                </NavItemC>
                <NavItem>
                  <ImgWrap2>
                    <Img1 src={img20} atl="Megha Dhurve" />
                  </ImgWrap2>
                  <NavLinks>
                    Megha Dhurve <br />
                    (0112IT181015)
                  </NavLinks>
                </NavItem>
              </NavMenu>
            </Subtitel2>
          </TextWrapper2>
        </AboutWrapper>
      </AboutContainer>
      <Ofooter />
    </>
  );
};

export default Ablm;
