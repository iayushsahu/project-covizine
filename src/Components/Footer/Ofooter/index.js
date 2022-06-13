import React from "react";
import {
  Foot,
  FootContainer,
  FootItem,
  FootLinks,
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
                <FootLinks to="/">Home</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="blog">Blog</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="/">Precaution</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="/">About</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="/">Contact</FootLinks>
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
