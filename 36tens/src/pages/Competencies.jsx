import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import CompetenciesCards from "../components/cards/CompetenciesCards";
import CompetenciesQuest from "../components/cards/CompetenciesQuest";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TextField } from "@mui/material";
import { competencies_questions } from "../assets/Data/CompetenciesData";
import { packageSelected } from "../assets/Data/Database";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import CustomButton from "../components/Custombutton";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Assign from "../components/cards/Assign";
import PreviewModal from "../components/modals/PreviewModal";
import Done from "../components/cards/Done";
import BuisnessImpactScale from "../components/cards/BuisnessImpactScale";
import { competencies_data } from "../assets/Data/OrdinalCompetencies";

const Competenciescontainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  .containerWrapper {
    width: 95%;
    height: 100%;
    display: flex;
    margin: 0px 20px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;
    h2 {
      color: #979797;
    }
  }
  .stepheader {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .competenciesBody {
    height: 70%;
    margin-bottom: 20px;
    padding-right: 10px;
    padding-left: 10px;
    /* width */
    ::-webkit-scrollbar {
      width: 3px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #a600a0;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #34485f;
    }
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .body {
    width: 100%;
    height: 90%;
    h5 {
      color: #979797;
    }
  }
`;

const MasterButtons = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
`;

function CreateCompetencyModal(props) {
  const [compName, setCompName] = useState("");
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Name Your Competency
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row style={{ marginBottom: "10px" }}>
            <TextField
              id="outlined-name"
              label="Competency Name"
              size="small"
              fullWidth
              value={compName}
              onChange={(e) => setCompName(e.target.value)}
            />
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ background: "white", border: "none", color: "black" }}
          onClick={props.onHide}
        >
          Cancel
        </Button>
        <Button
          style={{ background: "#a600a0", border: "none" }}
          onClick={() => {
            props.onCreate(compName);
          }}
        >
          Create Competency
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const steps = ["Impact Scale", "Preview", "Assign", "Done"];

const Competencies = () => {
  // const [compValues, setCompValues] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [buisnessCardDataIndex, setBuisnessCardDataIndex] = useState(0);

  // const [createCompetency_Modal, setCompetency_Modal] = useState(false);

  // const [isShowQuestion, setShowQuestion] = useState(true);
  // const [indexOfComp, setIndexOfComp] = useState(0);

  // const [competencies, setCompetencies] = useState({});

  const handleNext = () => {
    if (stepIndex < 4) {
      if (stepIndex === 0) {
        setShow(true);
        setStepIndex(stepIndex + 1);
      } else if (stepIndex === 1) {
        setShow(false);
        setStepIndex(stepIndex + 1);
      } else if (stepIndex === 2) {
        setStepIndex(stepIndex + 1);
      }
      // setStepIndex(stepIndex + 1);
      // if (stepIndex === 1) {
      //   setShow(true);
      //   setStepIndex(stepIndex + 2);
      // } else if (stepIndex === 3) {
      //   setShow(false);
      // }
    }
    console.log("next " + stepIndex);
  };
  const handleBack = () => {
    if (stepIndex > 0) {
      if (stepIndex === 3) {
        // setShow(true);
        setStepIndex(stepIndex - 1);
      } else if (stepIndex === 2) {
        setShow(true);
        setStepIndex(stepIndex - 1);
      } else if (stepIndex === 1) {
        setStepIndex(stepIndex - 1);
        setShow(false);
      }
      // setStepIndex(stepIndex - 1);
      // if (stepIndex === 3) {
      //   setStepIndex(stepIndex - 2);
      //   setShow(false);
      // } else if (stepIndex === 4) {
      //   setStepIndex(stepIndex - 1);
      //   setShow(true);
      // }
    }
    console.log("back " + stepIndex);
  };

  // let addCompetency = (val) => {
  //   setCompValues([...compValues, val]);
  //   setCompetency_Modal(false);
  //   setShowQuestion(false);
  // };

  // let removeCompetency = (index) => {
  //   let temp = [...compValues];
  //   temp.splice(index, 1);
  //   setCompValues(temp);
  // };

  // let showCompetenciesQuestion = (index) => {
  //   setShowQuestion(true);
  //   setIndexOfComp(index);
  // };

  let handleBuissnessCardDataIndex = (index) => {
    setBuisnessCardDataIndex(index);
  };
  return (
    <>
      <Competenciescontainer>
        <div className="containerWrapper">
          <Row style={{ height: "85%", width: "100%" }}>
            <Col
              xs={6}
              md={4}
              style={{
                padding: "0",
                height: "100%",
              }}
            >
              <div className="header">
                <h2>
                  {stepIndex === 0 ? "Competency Types" : "Competencies"}{" "}
                </h2>
              </div>

              <div className="competenciesBody">
                {/* Competencies */}
                {competencies_data.map((value, index) => {
                  return (
                    // stepIndex === 0 ?
                    <CompetenciesCards
                      key={index}
                      index={index}
                      title={value.competency_type}
                      question={value.competencies}
                      handleClick={() => handleBuissnessCardDataIndex(index)}
                      // handleClick={() => showCompetenciesQuestion(index)}
                    />
                  );
                  //: (
                  //   value.competencies.map((val, id) => {
                  //     return (
                  //       <CompetenciesCards
                  //         key={index}
                  //         index={index}
                  //         // title={stepIndex === 0 ? value.competency_type : val.competency_name}
                  //         title={val.competency_name}
                  //         question={val.statements}
                  //         handleClick={() => showCompetenciesQuestion(index)}
                  //       />
                  //     );
                  //   })
                  // );
                })}

                {/* value.competencies[index].map((val, ind) => { */}

                {/* // }) */}

                {/* Dynamically Competencies */}
                {/* {packageSelected === "standard"
                  ? null
                  : compValues.map((value, index) => {
                      return (
                        <CompetenciesCards
                          title={value}
                          type={"del"}
                          handleClick={() => removeCompetency(index)}
                        />
                      );
                    })} */}
              </div>
              {/* <div>
                {packageSelected === "standard" ? null : (
                  <CompetenciesCards
                    title={"Create new competency"}
                    handleClick={() => {
                      setCompetency_Modal(true);
                    }}
                    type={"add"}
                  />
                )}
              </div> */}
            </Col>

            <Col>
              <Row>
                <div className="stepheader">
                  <Box sx={{ width: "100%", marginTop: "30px" }}>
                    <Stepper activeStep={stepIndex} alternativeLabel>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </Box>
                </div>
              </Row>
              <Row>
                <div className="body">
                  {stepIndex === 0 ? (
                    <BuisnessImpactScale index={buisnessCardDataIndex} />
                  ) : // <CompetenciesQuest
                  //   type={isShowQuestion}
                  //   index={indexOfComp}
                  // />
                  stepIndex === 2 ? (
                    <Assign />
                  ) : stepIndex === 3 ? (
                    // <BuisnessImpactScale />
                    <Done />
                  ) : // ) : stepIndex === 5 ? (
                  // <Done />
                  null}
                </div>
                <Row style={{ width: "100%", justifyContent: "center" }}>
                  <MasterButtons>
                    <CustomButton
                      type={`normal textnormal  ${
                        stepIndex > 0 ? null : "disabled"
                      }`}
                      width="160px"
                      height="40px"
                      onClick={() => handleBack()}
                    >
                      <BiChevronLeft style={{ fontSize: "1.5rem" }} /> Previous
                      Step
                    </CustomButton>
                    <CustomButton
                      type={`normal textnormal  ${
                        stepIndex < 4 ? null : "disabled"
                      }`}
                      width="140px"
                      height="40px"
                      onClick={() => handleNext()}
                    >
                      <>
                        Next Step{" "}
                        <BiChevronRight style={{ fontSize: "1.5rem" }} />
                      </>
                    </CustomButton>
                  </MasterButtons>
                </Row>
              </Row>
            </Col>
          </Row>
          {/* </Container> */}
          {/* <CreateCompetencyModal
            show={createCompetency_Modal}
            onHide={() => setCompetency_Modal(false)}
            onCreate={(e) => addCompetency(e)}
          /> */}
          <PreviewModal
            show={show}
            onHide={() => handleBack()}
            onProceed={() => handleNext()}
          />
        </div>
      </Competenciescontainer>
    </>
  );
};

export default Competencies;
