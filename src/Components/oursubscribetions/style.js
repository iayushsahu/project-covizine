import styled from "styled-components";

export const Bgcontrol = styled.div`
  background: #010606;
`;
export const mainContainer = styled.div`
  color: #fff;
  /* background: #010606; */
  height: 90vh;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 140vh;
  }
`;

export const Subwrapper = styled.div`
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

export const Subrow = styled.div`
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

export const Subcol1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Subcol2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const Subtextwrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Topline = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading1 = styled.h1`
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  font-family: sans-serif;
  color: #fff;
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 21px;
  }
`;

export const Heading2 = styled.h1`
  margin-bottom: 24px;
  font-size: 55px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
