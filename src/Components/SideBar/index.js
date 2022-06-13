import React from "react";

import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SideBarLink,
  SideBarWrapper,
  SideBarRoute,
  SideBarMenu,
  SideBarRoute1,
} from "./style";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="/" onClick={toggle}>
            Home
          </SideBarLink>
          <SideBarRoute1 to="blog" onClick={toggle}>
            Blog
          </SideBarRoute1>
          <SideBarLink to="precaution" onClick={toggle}>
            Precaution
          </SideBarLink>
          <SideBarLink to="about" onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to="contact" onClick={toggle}>
            Contact
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/subscribe">subscribe</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
