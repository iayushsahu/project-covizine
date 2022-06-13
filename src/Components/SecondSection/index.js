import React from "react";
import {
  MainContainer,
  Artical1,
  Mainh1,
  Pre1p,
  Pre1pimg,
  Artical2,
  Pre2p,
  Pre2pimg,
  Artical3,
  Pre3p,
  Pre3pimg,
  Artical4,
  Pre4p,
  Pre4pimg,
  Artical5,
  Pre5p,
  Pre5pimg,
} from "./style";
import img1 from "../../Images/sneezing-cough.svg";
import img2 from "../../Images/hands-washing.svg";
import img3 from "../../Images/cleaning-door.svg";
import img4 from "../../Images/transfer-viral.svg";
import img5 from "../../Images/mask-wearing.svg";

const Precaution = () => {
  return (
    <>
    <hr />
      <MainContainer id='precaution'>
        <Mainh1>Follow these five easy steps</Mainh1>
        <Artical1>
          <Pre1p>
            Sneeze or cough? Cover your nose and mouth with a tissue or use your
            elbow.
          </Pre1p>
          <Pre1pimg>
            <img src={img1} alt="Percussion img" />
          </Pre1pimg>
        </Artical1>
        <Artical2>
          <Pre2p>
            Wash your hands often with soap and water for at least 20 seconds
          </Pre2p>
          <Pre2pimg>
            <img src={img2} alt="Percussion img" />
          </Pre2pimg>
        </Artical2>
        <Artical3>
          <Pre3p>
            Clean and disinfect surfaces around your home and work frequently
          </Pre3p>
          <Pre3pimg>
            <img src={img3} alt="Percussion img" />
          </Pre3pimg>
        </Artical3>
        <Artical4>
          <Pre4p>
            Keep at least 6 feet between yourself and others if you must be in
            public
          </Pre4p>
          <Pre4pimg>
            <img src={img4} alt="Percussion img" />
          </Pre4pimg>
        </Artical4>
        <Artical5>
          <Pre5p>
            Wear a cloth face covering over your mouth and nose when around ot
          </Pre5p>
          <Pre5pimg>
            <img src={img5} alt="Percussion img" />
          </Pre5pimg>
        </Artical5>
      </MainContainer>
    </>
  );
};

export default Precaution;
