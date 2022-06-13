import React, { useState, useEffect } from "react";
import { db } from "../../Database/firebase";
import "./style.css";
import img22 from "../../Images/undraw_push_notifications_im0o.svg";
import {
  Bgcontrol,
  Subwrapper,
  Subrow,
  Subcol1,
  Subtextwrapper,
  Topline,
  Heading1,
  Heading2,
  Subcol2,
  ImgWrap,
  Img,
} from "./style";

const Subscribesec = () => {
  const [email, setEmail] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("subscriber")
      .add({
        email: email,
      })
      .then(() => {
        setLoader(false);
        alert("Your Email has been submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setEmail("");
  };

  return (
    <>
      <Bgcontrol>
        <mainContainer>
          <Subwrapper>
            <Subrow>
              <Subcol1>
                <Subtextwrapper>
                  <Topline>subcription form</Topline>
                  <Heading1>for proper</Heading1>
                  <Heading2>notification</Heading2>
                  <form classname="formsub" subForm onSubmit={handleSubmit}>
                    <input
                      className="inputformsub"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <button className="btn-sub" type="submit">
                      Submit
                    </button>
                  </form>
                </Subtextwrapper>
              </Subcol1>
              <Subcol2>
                <ImgWrap>
                  <Img src={img22} alt="push_notification" />
                </ImgWrap>
              </Subcol2>
            </Subrow>
          </Subwrapper>
        </mainContainer>
      </Bgcontrol>
    </>
  );
};

export default Subscribesec;
