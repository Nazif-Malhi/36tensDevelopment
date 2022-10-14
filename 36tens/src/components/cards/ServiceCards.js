import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

const ServiceContainerActive = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 40px;
  text-align: start;
  background: white;
  margin-top: -30px;

  background: #3942ad;
  color: white;

  .servicetext {
    margin-top: 40px;
    margin-left: 50px;
    h1 {
      margin-bottom: 0px;
    }
    p {
      margin-top: 0px;
      font-size: 15px;
    }
  }
`;
const ServiceContainerInactive = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 40px;
  text-align: start;
  background: white;
  margin-top: -30px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: black;

  .servicetext {
    margin-top: 40px;
    margin-left: 50px;
    h1 {
      margin-bottom: 0px;
    }
    p {
      margin-top: 0px;
      font-size: 15px;
    }
  }
`;

const ServiceCard = ({ active }) => {
  return (
    <>
      {active ? (
        <ServiceContainerActive>
          <div className="servicetext">
            <h1>Feedbacks Surveys</h1>
            <p>Explore Now</p>
            <BsArrowRight style={{ color: "white", fontSize: "1.75rem" }} />
          </div>
        </ServiceContainerActive>
      ) : (
        <ServiceContainerInactive>
          <div className="servicetext">
            <h1>Feedbacks Surveys</h1>
            <p>Explore Now</p>
            <BsArrowRight style={{ color: "black", fontSize: "1.75rem" }} />
          </div>
        </ServiceContainerInactive>
      )}
    </>
  );
};

export default ServiceCard;
