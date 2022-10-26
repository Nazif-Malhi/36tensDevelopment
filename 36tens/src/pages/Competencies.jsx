import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import CompetenciesCards from "../components/cards/CompetenciesCards";
import CompetenciesQuest from "../components/cards/CompetenciesQuest";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TextField } from "@mui/material";
import { competencies_questions } from "../assets/Data/CompetenciesData";

const Competenciescontainer = styled.div`
  width: 100%;
  height: 100%;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
    h2 {
      color: #979797;
    }
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
    height: 100%;
    h5 {
      color: #979797;
    }
  }
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

const Competencies = () => {
  const [createCompetency_Modal, setCompetency_Modal] = useState(false);
  const [competencyName, setCompetencyName] = useState("");
  const [compValues, setCompValues] = useState([]);
  const [isShowQuestion, setShowQuestion] = useState(false);
  const [indexOfComp, setIndexOfComp] = useState(0);

  let addCompetency = (val) => {
    setCompValues([...compValues, val]);
    setCompetency_Modal(false);
    setShowQuestion(false);
  };

  let removeCompetency = (index) => {
    let temp = [...compValues];
    temp.splice(index, 1);
    setCompValues(temp);
  };

  let showCompetenciesQuestion = (index) => {
    setShowQuestion(true);
    setIndexOfComp(index);
  };

  return (
    <>
      <Competenciescontainer>
        <Container style={{ height: "100%" }}>
          <Row style={{ height: "85%" }}>
            <Col
              xs={6}
              md={4}
              style={{
                padding: "0",
                height: "100%",
              }}
            >
              <div className="header">
                <h2>Competencies</h2>
              </div>
              <div className="competenciesBody">
                {/* Competencies */}
                {competencies_questions.map((value, index) => {
                  return (
                    <CompetenciesCards
                      title={value.heading}
                      handleClick={() => showCompetenciesQuestion(index)}
                    />
                  );
                })}
                {/* Dynamically Competencies */}
                {compValues.map((value, index) => {
                  return (
                    <CompetenciesCards
                      title={value}
                      type={"del"}
                      handleClick={() => removeCompetency(index)}
                    />
                  );
                })}
              </div>
              <CompetenciesCards
                title={"Create new competency"}
                handleClick={() => {
                  setCompetency_Modal(true);
                }}
                type={"add"}
              />
            </Col>
            <Col xs={16} md={8}>
              <div className="body">
                <h5>CEO 360 Form</h5>
                <CompetenciesQuest type={isShowQuestion} index={indexOfComp} />
              </div>
            </Col>
          </Row>
        </Container>
        <CreateCompetencyModal
          show={createCompetency_Modal}
          onHide={() => setCompetency_Modal(false)}
          onCreate={(e) => addCompetency(e)}
        />
      </Competenciescontainer>
    </>
  );
};

export default Competencies;
