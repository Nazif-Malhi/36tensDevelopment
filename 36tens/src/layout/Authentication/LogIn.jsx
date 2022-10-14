import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { protectedbackground } from "../../assets/images";
import TextField from "@mui/material/TextField";
import { Logo } from "../../assets/images";
import CustomButton from "../../components/Custombutton";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-image: url(${protectedbackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const LogInWrapper = styled.div`
  width: 35%;
  height: 70%;
  background-color: white;
  border-radius: 7px;
  .header {
    margin-top: 40px;
    h1 {
      font-weight: 600px;
      font-size: 30px;
    }
  }
`;

const style = {
  width: "80%",
  marginBottom: "15px",
};

const LogIn = () => {
  const navigate = useNavigate();
  return (
    <LoginContainer>
      <LogInWrapper>
        <div className="header">
          <h1>LogIn</h1>
        </div>
        <Container fluid>
          <Row>
            <Col sm>
              <TextField
                label="Email"
                placeholder="Enter Your Email"
                style={style}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <TextField
                label="Password"
                placeholder="Please Enter Your Password"
                style={style}
              />
            </Col>
          </Row>
          <Row>
            <Col style={{ marginTop: "20px", marginBottom: "20px" }}>
              <CustomButton
                type={"normal textnormal"}
                width={"130px"}
                height={"40px"}
              >
                Login
              </CustomButton>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Forget your password{" "}
                <a href="/authentication/forget">Recover now</a>
                or Register yet ?{" "}
                <a href="/authentication/signup">Register Now</a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: "left", marginLeft: "20px" }}>
              <img src={Logo} alt="logo" />
            </Col>
          </Row>
        </Container>
      </LogInWrapper>
    </LoginContainer>
  );
};

export default LogIn;
