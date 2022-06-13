import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Footuni = styled.div`
  background: #000;
  justify-content: center;
  align-items: center;
  height: 18vh;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const Footlogo = styled(LinkR)`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  justify-content: center;
  margin-right: 35px;
  margin-bottom: -3px;
  padding-top: 10px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const Foot = styled.nav`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  @media screen and (max-width: 425px) {
    transition: 0.8s all ease;
  }
`;
export const FootContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  align-items: center;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const FootMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;
export const FootItem = styled.li`
  height: 40px;
`;

export const FootLinkS = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 2px solid #01bf71;
  }
`;

export const FootLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 2px solid #01bf71;
  }
`;
export const FootSecContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const CopyRightArea = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  text-align: center;
`;
