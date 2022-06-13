import React from "react";
import {
  Foot,
  FootContainer,
  FootItem,
  FootLinks,
  FootLinkS,
  FootMenu,
  FootSecContainer,
  CopyRightArea,
  Footlogo,
  Footuni,
} from "./style";

const Footer = () => {
  return (
    <>
      <Footuni>
        <Footlogo to="/">Covizine</Footlogo>
        <Foot>
          <FootContainer>
            <FootMenu>
              <FootItem>
                <FootLinks to="home">Home</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinkS to="blog">Blog</FootLinkS>
              </FootItem>
              <FootItem>
                <FootLinks to="precaution">Precaution</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="about">About</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="contact">Contact</FootLinks>
              </FootItem>
            </FootMenu>
          </FootContainer>
        </Foot>
        <FootSecContainer>
          <CopyRightArea>
            Copyright@ 2021 Covizine. All rights reserved
          </CopyRightArea>
        </FootSecContainer>
      </Footuni>
    </>
  );
};

export default Footer;
