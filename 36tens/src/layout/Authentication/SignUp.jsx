import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Custom, protectedbackground, Standard } from "../../assets/images";
import TextField from "@mui/material/TextField";
import { InputLabel, MenuItem, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import CustomButton from "../../components/Custombutton";
import { Logo } from "../../assets/images";
import { BsCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpContainer = styled.div`
  display: flex;
  width: 100%;
  height: 140vh;
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

  .packageWrapper {
    height: 160px;
    width: 80%;
    min-width: 120px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    // background: #d4dce4;
    margin: 10px;
    border-radius: 10px;
    .packageheader {
      width: 100%;
      height: 30px;
      .circleWrapper {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
      }
    }
    .packagebody {
      width: 100%;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .imgWrap {
        width: 30%;
        height: auto;
      }
    }
  }
`;

const style = {
  width: "80%",
  marginBottom: "15px",
  background: "white",
};
const SignUp = () => {
  const [type, setType] = useState("");
  const [custom, setCustom] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp () {
    const userSignUpData = {
      first_name: firstName,
      last_name: lastName,
      contact_num: number,
      type: type,
      company_name: companyName,
      email: email,
      password: password,
      package_title: custom ? "Custom" : "Standard",
    }

    try{
        const res = await axios.put("http://192.168.18.8:8000/api/users/", userSignUpData)
       .then((response) => console.log(response))
       .catch((error) => {
         console.log(error);
       })
    }
    catch (err){
        console.log(err);
    }
  }

    // const res = await axios.put("http://192.168.18.8:8000/api/users/", userSignUpData)
    //   .then((response) => console.log(response))
    //   .catch((error) => {
    //     console.log(error);
    //   })
  

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
                label="First Name"
                placeholder="Enter Your First Name"
                style={style}
                size="small"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TextField
                label="Last Name"
                placeholder="Enter Your Last Name"
                style={style}
                size="small"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TextField
                label="Mobile Number"
                placeholder="Enter Your Mobile Number"
                style={style}
                size="small"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <FormControl size="small" style={style}>
                <Select
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  style={{ textAlign: "left" }}
                >
                  <MenuItem value="">
                    <em style={{ fontStyle: "unset" }}>Who are you ?</em>
                  </MenuItem>
                  <MenuItem value={"Individual"}>Indvidual</MenuItem>
                  <MenuItem value={"Company"}>Company</MenuItem>
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TextField
                label="Company Name"
                placeholder="Enter Your Company Name"
                style={style}
                size="small"
                disabled={type === "Company" ? false : true}
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <TextField
                label={type === "Company" ? "Company Email" : "Email"}
                placeholder={
                  type === "Company"
                    ? "Enter Your Company Email"
                    : "Enter Your Email"
                }
                style={style}
                size="small"
                disabled={
                  type === "Individual" || type === "Company" ? false : true
                }
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Col>
          </Row>

          {/* <Row>
            <Col sm>
              <TextField
                label="Age"
                placeholder="Enter Your age"
                style={style}
                size="small"
              />
            </Col>
          </Row> */}
          <Row>
            <Col sm>
              <TextField
                label="Password"
                placeholder="Please Enter Your Password"
                style={style}
                size="small"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col
              sm
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div
                className="packageWrapper"
                onClick={() => {
                  setCustom(false);
                }}
              >
                <div className="packageheader">
                  <div className="circleWrapper">
                    {custom ? null : (
                      <BsCheckCircleFill
                        style={{ color: "#202ba3", fontSize: "1.5rem" }}
                      />
                    )}
                  </div>
                </div>
                <div className="packagebody">
                  <h4>Standard</h4>
                  <img src={Standard} alt="standard" className="imgWrap" />
                </div>
              </div>
            </Col>
            <Col
              sm
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div
                className="packageWrapper"
                onClick={() => {
                  setCustom(true);
                }}
              >
                <div className="packageheader">
                  <div className="circleWrapper">
                    {custom ? (
                      <BsCheckCircleFill
                        style={{ color: "#202ba3", fontSize: "1.5rem" }}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="packagebody">
                  <h4>Custom</h4>
                  <img src={Custom} alt="standard" className="imgWrap" />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomButton
                type={"normal textnormal margin-top"}
                width={"130px"}
                height={"40px"}
                onClick={() => {
                  handleSignUp();
                  // navigate("/admin/profile");
                }}
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
