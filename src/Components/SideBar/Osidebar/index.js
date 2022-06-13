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
} from "./style";

const OsideBar = ({ isOpen, toggle }) => {
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
          <SideBarLink to="blog" onClick={toggle}>
            Blog
          </SideBarLink>
          <SideBarLink to="/" onClick={toggle}>
            Precaution
          </SideBarLink>
          <SideBarLink to="/" onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to="/" onClick={toggle}>
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

export default OsideBar;
