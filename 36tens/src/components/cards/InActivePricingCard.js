import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const CardWrapper = styled.div`
  height: 100%;
  width: 332px;
  border-radius: 26px;
  padding: 20px 30px 20px 56px;
  .price {
    display: flex;
    margin-top: 50px;
    align-items: baseline;

    p {
      font-size: 1rem;
      color: #202ba3;
    }
    h2 {
      color: #202ba3;
      font-size: 32px;
    }
  }
  .subHeading {
    display: flex;
    align-items: flex-start;
    margin-top: 0px;

    h2 {
      margin-top: 0px;
      color: #202ba3;
      font-weight: normal;
    }
  }
  .description {
    text-align: start;
    p {
      margin: 0px;
      color: #202ba3;
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
  margin-top: 150px;
  margin-bottom: 30px;
  display: absolute;
  align-items: center;
`;

const BtnLink = styled(Link)`
  border-radius: 24px;
  background: #202ba3;
  padding: 15px 70px;
  opacity: 50%;
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

const list1 = [
  "Create Survey",
  "Add Atleast 5 competencies",
  "Customized Statments",
  "2 Users Team",
];
const list2 = [
  "Create Surveys",
  "Unlimited Premium",
  "50 Users team",
  "Shared Workspace",
];
const InActivePricingCard = ({ price, per, subHeading, discription, list }) => {
  return (
    <CardWrapper>
      <div className="price">
        <h2>${price}/</h2>
        <p>{per}</p>
      </div>
      <div className="subHeading">
        <h2>{subHeading}</h2>
      </div>
      <div className="description">
        <p>{discription}</p>
        <div className="list">
          {list === 1
            ? list1.map((key) => <p id={key}>{key}</p>)
            : list2.map((key) => <p id={key}>{key}</p>)}
          <PlanBtn>
            <BtnLink to="/plan">Choose Plan</BtnLink>
          </PlanBtn>
        </div>
      </div>
    </CardWrapper>
  );
};

export default InActivePricingCard;
