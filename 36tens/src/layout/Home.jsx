import React from "react";
import styled from "styled-components";
import { Desktop } from "../assets/images";
import CustomButton from "../components/Custombutton";
import { InputRound } from "../components/input";
import "../assets/styles/styles.css";

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 110vh;
  align-item: center;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    height: 205vh;
  }
`;

const DisplayContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: white;
  width: 98%;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    width: 87%;
  }
`;

const Home = ({ id }) => {
  return (
    <HomeContainer id={id}>
      <DisplayContainer>
        <div className="parents">
          <div className="child">
            <div className="text">
              <h1>360</h1>
              <h2>FEEDBACK</h2>
              <h3 style={{ marginTop: "20px" }}>ONLINE FAST &</h3>
              <h3>SIMPLE</h3>
              <div
                className="customInputBtn"
                style={{ display: "flex", marginTop: "20px" }}
              >
                <InputRound
                  type="email"
                  placeholder="lucasdebelder@imd.com"
                  required="required"
                />
                <CustomButton
                  type={"default bold"}
                  width={"100px"}
                  height={"40px"}
                >
                  Free Trail
                </CustomButton>
              </div>
            </div>
          </div>
          <div className="child">
            <img
              src={Desktop}
              alt="desktop"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
                background:
                  "linear-gradient(323.15deg,#ca66c6 -9.01%,rgba(202, 102, 198, 0) 23.86%)",
              }}
            />
          </div>
        </div>
      </DisplayContainer>
    </HomeContainer>
  );
};

export default Home;
