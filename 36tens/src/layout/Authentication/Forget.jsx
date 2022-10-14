import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { protectedbackground } from "../../assets/images";
import TextField from "@mui/material/TextField";
import CustomButton from "../../components/Custombutton";
import { Logo } from "../../assets/images";

const ForgetContainer = styled.div`
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

const ForgetWrapper = styled.div`
  width: 35%;
  height: 70%;
  background-color: white;
  border-radius: 7px;
  .header {
    margin-top: 40px;
    margin-bottom: 40px;
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

const Forget = () => {
  return (
    <ForgetContainer>
      <ForgetWrapper>
        <div className="header">
          <h1>Forget</h1>
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
            <Col style={{ marginTop: "20px", marginBottom: "60px" }}>
              <CustomButton
                type={"normal textnormal"}
                width={"130px"}
                height={"40px"}
              >
                Continue
              </CustomButton>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                If you havn't Register yet ?{" "}
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
      </ForgetWrapper>
    </ForgetContainer>
  );
};

export default Forget;
