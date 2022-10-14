import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const CardWrapper = styled.div`
  height: 100%;
  width: 320px;
  border-radius: 26px;
  padding: 20px 30px 20px 56px;
  background-color: #202ba3;
  box-shadow: 0px 42px 34px 0px #5243c24b;
  margin-left: 27px;

  @media screen and (min-width: 1085px) {
    transform: translate(0%, -15%);
  }
  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    float: right;
    width: 60%;
    height: 30px;
    background: white;
    border-radius: 13.5px;
    p {
      color: #a600a0;
      font-size: 0.9rem;
      font-weight: bold;
      margin: 0px;
    }
  }
  .price {
    display: flex;
    margin-top: 50px;
    align-items: baseline;

    p {
      font-size: 1rem;
      color: white;
    }
    h2 {
      color: white;
      font-size: 32px;
    }
  }
  .subHeading {
    display: flex;
    align-items: flex-start;
    margin-top: 0px;

    h2 {
      margin-top: 0px;
      color: white;
      font-weight: normal;
    }
  }
  .description {
    text-align: start;
    p {
      margin: 0px;
      color: white;
    }
    .list {
      margin-top: 10px;
      p {
        margin-top: 10px;
      }
    }
  }
`;

const PlanBtn = styled.nav`
  margin-top: 50px;
  margin-bottom: 30px;
  display: absolute;
  align-items: center;
`;

const BtnLink = styled(Link)`
  border-radius: 24px;
  background: #a600a0;

  padding: 10px 60px;
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

const ActivePricingCard = () => {
  return (
    <CardWrapper>
      <div className="heading">
        <p>MOST POPULAR</p>
      </div>
      <div className="price">
        <h2>$140/</h2>
        <p>per appraisal</p>
      </div>
      <div className="subHeading">
        <h2 style={{ fontSize: "24px" }}>Customer360</h2>
      </div>
      <div className="description">
        <p>Customize surveys user profiles and much more</p>
        <div className="list">
          <p>Create Surveys</p>
          <p>Customized Questions</p>
          <p>Customized Statments</p>
          <p>20 Users Team</p>
          <p>Shared Workspace</p>
          <PlanBtn>
            <BtnLink to="/plan">Choose Plan</BtnLink>
          </PlanBtn>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ActivePricingCard;
