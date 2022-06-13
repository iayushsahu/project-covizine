import React from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLinksb,
} from "./style";

const toggleHome = () => {
  scroll.scrollToTop();
};

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Navlogo to="/" onClick={toggleHome}>
            Covizine
          </Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home" onClick={toggleHome}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksb to="blog">Blog</NavLinksb>
            </NavItem>
            <NavItem>
              <NavLinks to="precaution">Precaution</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/subscribe">Subscribe</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
