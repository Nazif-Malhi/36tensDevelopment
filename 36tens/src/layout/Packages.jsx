import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Path1 } from "../assets/images";
// import ActivePricingCard from "../components/cards/ActivePricingCard";
// import InActivePricingCard from "../components/cards/InActivePricingCard";
import PricingCard from "../components/cards/PricingCard";

const PricingContainer = styled.div`
  display: flex;
  //   flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const TextContainer = styled.div`
  position: absolute;
  top: 215%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
  h1 {
    margin: 0px;
    font-weight: 700px;
    font-size: 50px;
    color: #232340;
  }
  p {
    color: #818181;
  }
`;

const Text = styled.div`
  margin-top: 80px;
`;
const Btn = styled.nav`
  margin-top: 50px;
  margin-bottom: 30px;
  display: absolute;
  align-items: center;
  @media screen and (max-width: 768px) {
    // display: none;
  }
`;

const BtnLink = styled(Link)`
  border-radius: 13px;
  background: #a600a0;

  padding: 12px 25px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #232340;
  }
`;

const Pricing = styled.div`
  height: 100vh;
  width: 100%;
  h1 {
    font-weight: 700px;
    font-size: 100px;
  }
`;

const PricingWrapper = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: white;

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .column {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-basis: 100%;
  }

  @media screen and (min-width: 768px) {
    .column {
      flex: 1;
    }
  }
`;

const initial = [
  {
    price: "0",
    per: "month",
    subHeading: "Free Trial",
    desc: "Get a feel of the tool & Limited Analytics",
    list: [
      "Create Survey",
      "Add Atleast 5 competencies",
      "Customized Statments",
      "2 Users Team",
    ],
  },
];
const mid = [
  {
    price: "225",
    per: "per appraisal",
    subHeading: "Standard360",
    desc: "Advance tools & analytics & more team members",
    list: [
      "Create Surveys",
      "Unlimited Premium",
      "50 Users team",
      "Shared Workspace",
    ],
  },
];
const popular = [
  {
    price: "150",
    per: "per appraisal",
    subHeading: "Customer360",
    desc: "Customize surveys user profiles and much more",
    list: [
      "Create Surveys",
      "Customized Questions",
      "Customized Statments",
      "20 Users Team",
      "Shared Workspace",
    ],
  },
];
const Packages = ({ id }) => {
  return (
    <PricingContainer>
      <img src={Path1} alt="path" />
      <TextContainer>
        <Text>
          <h1>Evaluate Behaviours For Performance &</h1>
          <h1>Buisness Growth Today!</h1>
          <p>We empowers and enables employees to get and provide structured</p>
          <p>
            feedback for leadership and competency assessments, coupled with
          </p>
          <p>prioritized development and action plans.</p>
        </Text>
        <Btn>
          <BtnLink to="/onlinedemo">Request Online Demo</BtnLink>
        </Btn>

        <Pricing id={id}>
          <h1>Pricing</h1>
          <PricingWrapper>
            <div className="row">
              <div className="column">
                <PricingCard list={initial} />
              </div>
              <div className="column">
                <PricingCard list={mid} />
              </div>
              <div className="column">
                <PricingCard list={popular} popular={true} />
              </div>
            </div>
          </PricingWrapper>
        </Pricing>
      </TextContainer>
    </PricingContainer>
  );
};

export default Packages;
