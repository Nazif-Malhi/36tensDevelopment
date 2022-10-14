import React from "react";
import styled from "styled-components";
import { Desktop2, Path1 } from "../assets/images";
import { BsArrowRightCircleFill } from "react-icons/bs";
import ServiceCard from "../components/cards/ServiceCards";

const ServicesContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  .path {
    max-width: 100%;
    max-height: 100%;
    margin-top: -520px;
    // @media screen and (min-width: 1085) {
    //   margin-top: -900px;
    // }
  }
`;

const ServiceWrapper = styled.div`
  position: absolute;
  top: 380%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media screen and (max-width: 1096px) {
    top: 586%;
  }
  @media screen and (max-width: 768px) {
    top: 676%;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .column {
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
    flex-basis: 100%;
    .text {
      justify-content: center;
      margin-left: 20px;
      @media screen and (max-width: 1096px) {
        align-items: center;
      }
      h1 {
        font-size: 60px;
        margin: 0px;
        letter-spacing: 0.2rem;
        color: #232340;
      }
      p {
        margin: 0px;
        color: #606060;
      }
      width: 100%;
      height: 100%;
      align-items: flex-start;
      display: flex;
      flex-direction: column;
    }
    .circleBtnWrapper {
      display: flex;
      margin-top: 10px;
      width: 200px;
      height: 60px;
      align-items: center;
      p {
        font-size: 18px;
        color: #8b8b8b;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .column {
      flex: 1;
    }
  }

  .servicecard_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1096px) {
      margin-top: 75%;
      width: 100%;
      align-items: center;
    }
  }
`;
const Scene = styled.div`
  height: 50vh;
  @media screen and (min-width: 1096px) {
    width: 120%;
    margin-left: -35%;
  }

  display: flex;
  .scene2 {
    max-width: 120%;
    height: fit-content;
  }
`;

const Services = () => {
  return (
    <ServicesContainer>
      <img className="path" src={Path1} alt="path" />
      <ServiceWrapper>
        <div className="midContainer">
          <div className="row">
            <div className="column">
              <div className="text">
                <h1>Do more</h1>
                <h1>than just</h1>
                <h1>Surveys.</h1>
                <p>People and Data analytics combined for </p>
                <p>powerful resutls, interactive dashboards </p>
                <p>Intutive analysis with predictions and smart </p>
                <p> recommendations.</p>
                <div className="circleBtnWrapper">
                  <BsArrowRightCircleFill
                    style={{ color: "#C897E4", fontSize: "4rem" }}
                  />
                  <div className="text">
                    <p>Start Your</p>
                    <p>Free Trail</p>
                  </div>
                </div>
                <Scene>
                  <img className="scene2" src={Desktop2} alt="scene2" />
                </Scene>
              </div>
            </div>
            <div className="column">
              <div className="servicecard_wrapper">
                <ServiceCard active={true} />
                <ServiceCard active={false} />
                <ServiceCard active={false} />
                <ServiceCard active={false} />
              </div>
            </div>
          </div>
        </div>
      </ServiceWrapper>
    </ServicesContainer>
  );
};

export default Services;
