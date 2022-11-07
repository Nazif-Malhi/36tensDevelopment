import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Form } from "react-bootstrap";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { competencies_data } from "../../assets/Data/OrdinalCompetencies";

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
  height: 390px;
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
    width: 90%;
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
  .scrollContainer{
    
    overflow-y:scroll;
    overflow-x:hidden;
    height:150px;
    ::-webkit-scrollbar {
      width: 5px;
    }
    margin-top:10px;
  }
`;

const BuisnessImpactScale = ({ index }) => {
  return (
    <BuisnessImpactScaleContainer>
      <div className="scale_wrapper">
        <Container>
          <Row style={{ textAlign: "center" }}>
            <h3>{competencies_data[index].competency_type}</h3>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Row style={{ width: "80%", marginTop: "10px" }}>
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
            <Row style={{ width: "70%", marginTop: "10px" }}>
              <Slider
                aria-label="Custom marks"
                defaultValue={50}
                getAriaValueText={valuetext}
                step={50}
                size={"small"}
                style={{ padding: "0px 0px" }}
              />
            </Row>
          </Row>
          {/* <Row style={{ marginTop: "20px" }}>
            <Col>
              <h4>Competencies</h4>
            </Col>
            <Col>
              <Row style={{ margin: "0px 20px" }}>
                <Col style={{ textAlign: "left", padding: "0px" }}>
                  <p>Basic</p>
                </Col>
                <Col style={{ textAlign: "left" }}>
                  <p>Intermediate</p>
                </Col>
                <Col style={{ textAlign: "center", padding: "0px" }}>
                  <p>Advance</p>
                </Col>
                <Col style={{ textAlign: "right", padding: "0px" }}>
                  <p>Expert</p>
                </Col>
              </Row>
            </Col>
          </Row> */}
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <h4>Competencies</h4>
            </Col>
            <Col>
              <Row>
                <Col>
                  <p>Basic</p>
                </Col>
                <Col>
                  <p>Intermediate</p>
                </Col>
                <Col>
                  <p>Advance</p>
                </Col>
                <Col>
                  <p>Expert</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="scrollContainer">
            {competencies_data[index].competencies.map((val, id) => {
              console.log(val.competency_name)
              return (
                <Row key={id}>
                  <Col>
                    <h6>{val.competency_name}</h6>
                  </Col>
                  <Col>
                    <Row>
                      <Col style={{ textAlign: "center" }}>
                        <Form.Check type="radio" aria-label="radio 1" name={id} />
                      </Col>
                      <Col style={{ textAlign: "center" }}>
                        <Form.Check type="radio" aria-label="radio 1" name={id} />
                      </Col>
                      <Col style={{ textAlign: "center" }}>
                        <Form.Check type="radio" aria-label="radio 1" name={val.competency_name} />
                      </Col>
                      <Col style={{ textAlign: "center" }}>
                        <Form.Check type="radio" aria-label="radio 1" name={val.competency_name} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              );
            })}
          </div>

          {/* <Row style={{ marginBottom: "5px" }}>
            <Col>
              <h3>{competencies_data[index].competency_type}</h3>
            </Col>
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
              <Row>
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
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Competencies</h4>
            </Col>
            <Col>
              <Row style={{ width: "400px" }}>
                <Col style={{ textAlign: "left", padding: "0px" }}>
                  <p>Almost Never</p>
                </Col>
                <Col style={{ textAlign: "left" }}>
                  <p>Not Very Often</p>
                </Col>
                <Col style={{ textAlign: "center", padding: "0px" }}>
                  <p>Sometimes</p>
                </Col>
                <Col style={{ textAlign: "right", padding: "0px" }}>
                  <p>Mostly</p>
                </Col>
                <Col style={{ textAlign: "right", padding: "0px" }}>
                  <p>Never Always</p>
                </Col>
              </Row>
            </Col>
          </Row>

          <div className="scrollContainer">
            {competencies_data[index].competencies.map((val, id) => {
              return (
                <Row key={id}>
                  <Col>
                    <h6>{val.competency_name}</h6>
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ width: 360 }}></Box>
                  </Col>
                </Row>
              );
            })} */}

          {/* <Row>
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
            </Row> */}
          {/* </div> */}
        </Container>
      </div>
    </BuisnessImpactScaleContainer>
  );
};

export default BuisnessImpactScale;
