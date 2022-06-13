import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 2.5rem;
  color: #f5f5f5;
  margin-bottom: 50px;
  text-transform: uppercase;
  text-decoration: 3px underline #01bf71;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AboutContainer = styled.div`
  color: #fff;
  background: #010606;
  height: 155vh;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 290vh;
  }
  @media screen and (max-width: 480px) {
    padding: 100px 0;
    height: 270vh;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2 col1'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 10px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    margin-top: -170px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 15px;
`;

export const TextWrapper2 = styled.div`
  padding-top: 0;
  padding-bottom: 15px;
  display: block;
  margin: auto;
`;

export const TopLine1 = styled.p`
  color: #01bf71;
  font-size: 17px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 25px;
  text-align: center;
  text-decoration: 2px underline #01bf71;
`;

export const Img1 = styled.img`
  width: 180px;
  padding-right: 0;
  border: 3px solid white;
  border-radius: 100px;
`;

export const Subtitel2 = styled.div`
  max-width: 440px;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ darktext }) => (darktext ? "#010606" : "#fff")};
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    align-items: center;
    display: table;
  }

  @media screen and (max-width: 480px) {
    align-items: center;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavItemC = styled.li`
  height: 80px;
  margin-left: 120px;
  margin-right: 120px;

  @media screen and (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 280px;
  }

  @media screen and (max-width: 480px) {
  }
`;
export const NavLinks = styled.div`
  color: #ededed;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  margin-top: 130px;

  &:active {
    border-bottom: 3px solid #01bf71;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const NavLinkt = styled.div`
  color: #ededed;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  margin-top: 130px;

  &:active {
    border-bottom: 3px solid #01bf71;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    justify-content: center;
    padding-top: 75px;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-decoration: 2px underline #01bf71;
`;

export const Subtitel = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 18px;
  color: #ededed;
  line-height: 24px;
  color: ${({ darktext }) => (darktext ? "#010606" : "#fff")};
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  margin-top: 235px;
  height: 100%;
`;

export const ImgWrap2 = styled.div`
  max-width: 555px;
  height: 100%;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
