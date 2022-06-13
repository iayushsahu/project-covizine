import React from "react";
import Icon1 from "../../Images/undraw_daily.svg";
import Icon2 from "../../Images/undraw_notification.svg";
import Icon3 from "../../Images/undraw_without_ads.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./style";

const OurServices = () => {
  return (
    <>
      <ServicesContainer>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon3} alt="without_ads" />
            <ServicesH2>Without ads</ServicesH2>
            <ServicesP>All users will get content without ads</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon1} alt="daily update" />
            <ServicesH2>Daily updates</ServicesH2>
            <ServicesP>we post daily news article</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} alt="post notification" />
            <ServicesH2>Email notification</ServicesH2>
            <ServicesP>Subscriber will get notifications on email</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default OurServices;
