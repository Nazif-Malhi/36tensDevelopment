import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import Marking, { Labeling, LabelMarker } from "../cards/Marking";
import { Row, Col, Button } from "react-bootstrap";
// import { competencies_questions } from "../../assets/Data/CompetenciesData";
import "../../assets/styles/styles.css";
import { competencies_data } from "../../assets/Data/OrdinalCompetencies";

const QuestionContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #6c6a6a;

  .header {
  }
  .border {
    border-bottom: 2px solid #edeff2;
    // margin-top: 20px;
  }
`;
const PreviewModal = ({ show, onHide, onProceed }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  return (
    <Modal
      show={show}
      fullscreen={true}
      onHide={onHide}
      className="customScroll"
    >
      <Modal.Header closeButton>
        <Modal.Title>Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <QuestionContainer>
          <div className="header">
            <Row>
              <Col md={"auto"} style={{ width: "40px", padding: "0px" }}></Col>
              <Col
                xs={12}
                md={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <h5 style={{ marginBottom: "0px" }}>Questions</h5>
              </Col>
              <Col>
                <LabelMarker bold={true} />
              </Col>
            </Row>
          </div>
          <div className="border" style={{ marginTop: "20px" }} />

          <div className="body">
            {competencies_data.map((value, key) => {
              return value.competencies.map((val, id) => {
                return val.statements.map((qu, ty) => {
                  return (
                    <Row
                      style={{ height: "80px", alignItems: "center" }}
                      key={key}
                    >
                      <Col
                        md={"auto"}
                        style={{ width: "40px", padding: "0px" }}
                      >
                        <h5 style={{ marginLeft: "10px" }}>
                          {key + id + ty} .
                        </h5>
                      </Col>
                      <Col
                        xs={12}
                        md={8}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <h6 style={{ marginBottom: "0px" }} key={key}>
                          {qu}
                        </h6>
                      </Col>
                      <Col>
                        <Labeling />
                      </Col>
                      <div className="border" />
                    </Row>
                  );
                });
              });
            })}
            {/* {competencies_questions.map((val, key) => {
              return (
                <Row style={{ height: "80px", alignItems: "center" }} key={key}>
                  <Col md={"auto"} style={{ width: "40px", padding: "0px" }}>
                    <h5 style={{ marginLeft: "10px" }}>{key} .</h5>
                  </Col>
                  <Col
                    xs={12}
                    md={8}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <h6 style={{ marginBottom: "0px" }} key={key}>
                      {val.questions}
                    </h6>
                  </Col>
                  <Col>
                    <Labeling />
                  </Col>
                  <div className="border" />
                </Row>
              );
            })} */}
          </div>
        </QuestionContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ background: "white", border: "none", color: "black" }}
          onClick={onHide}
        >
          Cancel
        </Button>
        <Button
          style={{ background: "#a600a0", border: "none" }}
          onClick={onProceed}
        >
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PreviewModal;
