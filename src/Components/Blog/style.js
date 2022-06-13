import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import { Link as LinkR } from "react-router-dom";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  height: 120vh;

  @media screen and (max-width: 768px) {
    height: 1100px;
    height: 310vh;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
    height: 290vh;
  }
`;
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const ServicesCard = styled(LinkR)`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 10px;
  padding-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  color: #000;
  text-decoration: none;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ServicesIcon = styled.img`
  height: 210px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 8px;
`;
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 50px;
  text-transform: uppercase;
  text-decoration: 3px underline #01bf71;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  position: relative;
`;
export const LmbBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 15px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-top: 30px;
  margin-bottom: 20px;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
