import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
    label: "Operational",
  },
  {
    value: 50,
    label: "Financial",
  },

  {
    value: 100,
    label: "Strategic",
  },
];

function valuetext(value) {
  return `${value}`;
}

const BuisnessImpactScaleContainer = styled.div`
  width: 100%;
  height: 332px;
  margin-top: 20px;
  background: white;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .scale_wrapper {
    height: 90%;
    width: 80%;
    h3 {
      color: #979797;
    }
    p {
      color: #979797;
      marign:0;
      padding:0;
    }
  }
  // .MuiSlider-track {
  //   background: rgb(242, 78, 30);
  //   background: linear-gradient(
  //     90deg,
  //     rgba(242, 78, 30, 1) 0%,
  //     rgba(240, 140, 55, 1) 20%,
  //     rgba(255, 199, 0, 1) 50%,
  //     rgba(153, 196, 86, 1) 80%,
  //     rgba(94, 194, 130, 1) 99%
  //   );
    border: none;
  }
`;

const BuisnessImpactScale = () => {
  return (
    <BuisnessImpactScaleContainer>
      <div className="scale_wrapper">
        <Container>
          <Row style={{ marginBottom: "5px" }}>
            <h3>Buisness Impact Scale</h3>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Row>
                <Col style={{ textAlign: "left", padding: "0px" }}>
                  <p>Operational</p>
                </Col>
                <Col style={{ textAlign: "center" }}>
                  <p>Financial</p>
                </Col>
                <Col style={{ textAlign: "right", padding: "0px" }}>
                  <p>Strategic</p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5>Personal Focus </h5>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: 240 }}>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={50}
                  getAriaValueText={valuetext}
                  step={50}
                />
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Value Focus </h5>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: 240 }}>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={50}
                  getAriaValueText={valuetext}
                  step={50}
                />
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Relationship Focus </h5>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: 240 }}>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={50}
                  getAriaValueText={valuetext}
                  step={50}
                />
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Success Focus </h5>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: 240 }}>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={50}
                  getAriaValueText={valuetext}
                  step={50}
                />
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Stategic Focus </h5>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: 240 }}>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={50}
                  getAriaValueText={valuetext}
                  step={50}
                />
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Leader Focus </h5>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: 240 }}>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={50}
                  getAriaValueText={valuetext}
                  step={50}
                />
              </Box>
            </Col>
          </Row>
        </Container>
      </div>
    </BuisnessImpactScaleContainer>
  );
};

export default BuisnessImpactScale;
