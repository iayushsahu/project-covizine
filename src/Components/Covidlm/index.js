import React, { useState } from "react";
import img01 from "../../Images/undraw_medical_research_qg4d.svg";
import img02 from "../../Images/undraw_doctor_kw5l.svg";
import Onavbar from "../NavBar/Onavbar";
import Ofooter from "../Footer/Ofooter";
import OsideBar from "../SideBar/Osidebar";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Heading,
  Heading2,
  TextWrapper,
  TopLine,
  Subtitel,
  List,
  Unorderd,
  Column2,
  ImgWrap,
  ImgWrap2,
  Img,
} from "./style";

const Covidlm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <OsideBar isOpen={isOpen} toggle={toggle} />
      <Onavbar toggle={toggle} />
      <AboutContainer>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <Heading>about covid-19</Heading>
              <Heading2>
                COVID-19 affects different people in different ways. Most
                infected people will develop mild to moderate illness and
                recover without hospitalization.
              </Heading2>
              <TextWrapper>
                <TopLine>Most common symptoms:</TopLine>
                <Subtitel>
                  <List>fever</List>
                  <List>Dry cough</List>
                  <List>Tiredness</List>
                </Subtitel>
              </TextWrapper>
              <TextWrapper>
                <TopLine>Less common symptoms:</TopLine>
                <Subtitel>
                  <List>Headache</List>
                  <List>Diarrhea</List>
                  <List>Sore throat</List>
                  <List>Conjunctivitis</List>
                  <List>Aches and pains</List>
                  <List>Loss of taste or smell</List>
                  <List>A rash on the skin, or discoloration of fingers</List>
                </Subtitel>
              </TextWrapper>
              <TextWrapper>
                <TopLine>Serious symptoms:</TopLine>
                <Subtitel>
                  <List>Chest pain or pressure</List>
                  <List>Difficulty breathing or shortness of breath</List>
                  <List>Loss of speech or movement</List>
                </Subtitel>
                <Subtitel>
                  Seek immediate medical attention if you have serious symptoms.
                  Always call before visiting your doctor or health facility.
                </Subtitel>
                <Subtitel>
                  People with mild symptoms who are otherwise healthy should
                  manage their symptoms at home.
                </Subtitel>
                <Subtitel>
                  On average it takes 5–6 days from when someone is infected
                  with the virus for symptoms to show, however it can take up to
                  14 days.
                </Subtitel>
                <Subtitel>
                  Protect yourself and others around you by knowing the facts
                  and taking appropriate precautions. Follow the advice provided
                  by your local health authority.
                </Subtitel>
              </TextWrapper>
              <TextWrapper>
                <TopLine>To prevent the spread of COVID-19:</TopLine>
                <Subtitel>
                  <Unorderd>
                    <List>Stay home if you feel unwell.</List>
                    <List>Don’t touch your eyes, nose, or mouth.</List>
                    <List>
                      Wear a mask when physical distancing is not possible.
                    </List>
                    <List>
                      Maintain a safe distance from anyone who is coughing or
                      sneezing.
                    </List>
                    <List>
                      Clean your hands often. Use soap and water, or an
                      alcohol-based hand rub.
                    </List>
                    <List>
                      If you have a fever, cough, and difficulty breathing, seek
                      medical attention.
                    </List>
                    <List>
                      Cover your nose and mouth with your bent elbow or a tissue
                      when you cough or sneeze.
                    </List>
                  </Unorderd>
                </Subtitel>
              </TextWrapper>
              <Subtitel>
                Calling in advance allows your healthcare provider to quickly
                direct you to the right health facility. This protects you and
                prevents the spread of viruses and other infections.
              </Subtitel>
              <TextWrapper>
                <TopLine>Masks</TopLine>
                <Subtitel>
                  Masks can help prevent the spread of the virus from the person
                  wearing the mask to others. Masks alone do not protect against
                  COVID-19 and should be combined with physical distancing and
                  hand hygiene. Follow the advice provided by your local health
                  authority.
                </Subtitel>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img01} alt="Medical" />
              </ImgWrap>
              <ImgWrap2>
                <Img src={img02} alt="Medical" />
              </ImgWrap2>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
      <Ofooter />
    </>
  );
};

export default Covidlm;
