import React from "react";
import { FaBars } from "react-icons/fa";
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

const Onavbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Navlogo to="/">Covizine</Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksb to="blog">Blog</NavLinksb>
            </NavItem>
            <NavItem>
              <NavLinks to="/">Precaution</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">Contact</NavLinks>
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

export default Onavbar;
