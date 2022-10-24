import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { protectedbackground } from "../../assets/images";
import TextField from "@mui/material/TextField";
import { InputLabel, MenuItem, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import CustomButton from "../../components/Custombutton";
import { Logo } from "../../assets/images";

const SignUpContainer = styled.div`
  display: flex;
  width: 100%;
  height: 120vh;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-image: url(${protectedbackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SignUpWrapper = styled.div`
  width: 40%;
  height: 85%;
  background-color: white;
  border-radius: 7px;
  .header {
    margin-top: 20px;
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
const SignUp = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <SignUpContainer>
      <SignUpWrapper>
        <div className="header">
          <h1>SIGN-UP</h1>
        </div>
        <Container fluid>
          <Row>
            <Col sm>
              <TextField
                label="Name"
                placeholder="Enter Your Full Name"
                style={style}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TextField
                label="Mobile Number"
                placeholder="Enter Your Mobile Number"
                style={style}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TextField
                label="Company Email"
                placeholder="Enter Your Company Email"
                style={style}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TextField
                label="Name"
                placeholder="Enter Your Company Address"
                style={style}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <FormControl style={style}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
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
            <Col>
              <CustomButton
                type={"normal textnormal"}
                width={"130px"}
                height={"40px"}
              >
                Sign-Up
              </CustomButton>
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{ marginTop: "10px" }}>
                if you already have an account?{" "}
                <a href="/authentication/login">Login Now</a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: "left", marginLeft: "20px" }}>
              <img src={Logo} alt="logo" />
            </Col>
          </Row>
        </Container>
      </SignUpWrapper>
    </SignUpContainer>
  );
};

export default SignUp;
