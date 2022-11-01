import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { protectedbackground } from "../../assets/images";
import TextField from "@mui/material/TextField";
import { Logo } from "../../assets/images";
import CustomButton from "../../components/Custombutton";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setAuthToken } from "../../utils/authToken";

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
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError(true);
      setEmail(email);
    } else {
      setEmailError(false);
    }
  };

  const handleLogin = () => {
    const loginPayload = {
      email: email,
      password: password,
    };

    axios
      .post("http://207.148.69.16:8011/auth/token/", loginPayload)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        console.log(token);
        setAuthToken(token);
        navigate("/admin/dashboard");
      });

    // if (emailError && password === "123") {
    //navigate("/admin/dashboard");
    // }
  };
  return (
    <LoginContainer>
      <LogInWrapper>
        <div className="header">
          <h1>LogIn</h1>
        </div>
        <Container fluid>
          <Row>
            <Col sm style={{ flexDirection: "column" }}>
              <TextField
                error={emailError ? false : true}
                helperText={emailError ? " " : "incorrect email"}
                type={"email"}
                label="Email"
                placeholder="Enter Your Email"
                style={style}
                onChange={(e) => validateEmail(e)}
                size="small"
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <TextField
                type={"password"}
                label="Password"
                placeholder="Please Enter Your Password"
                style={style}
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col style={{ marginTop: "20px", marginBottom: "20px" }}>
              <CustomButton
                type={"normal textnormal"}
                width={"130px"}
                height={"40px"}
                onClick={() => {
                  handleLogin();
                }}
              >
                Login
              </CustomButton>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Forget your password{" "}
                <a href="/authentication/forget">Recover now</a> or Register yet
                ? <a href="/authentication/signup">Register Now</a>
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
