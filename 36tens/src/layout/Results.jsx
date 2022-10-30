import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import { protectedbackground } from "../assets/images";
import { competencies_questions } from "../assets/Data/CompetenciesData";
import { Labeling, LabelMarker } from "../components/cards/Marking";

const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background-image: url(${protectedbackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .results_wrapper {
    margin: 10px 0px 10px 0px;
    padding-bottom: 100px;
    width: 95%;
    height: 90%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background: white;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top_header {
      width: 90%;
    }
    .top_body {
      width: 90%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      p {
        color: #979797;
      }

      thead tr {
        border: none;
      }
      thead th:first-child {
        border-radius: 10px 0 0 0;
      }
      thead th:last-child {
        border-radius: 0 10px 0 0;
      }
      td {
        text-align: center;
      }
      th {
        text-align: center;
      }
    }
  }
`;
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
const Results = () => {
  return (
    <ResultsContainer>
      <div className="results_wrapper">
        <div className="top_header">
          <Row>
            <Col md={"auto"} style={{ margin: "30px 0px 0px 0px" }}>
              <h3>Hello</h3>
            </Col>
            <Col md={"auto"} style={{ margin: "30px 0px 0px 0px" }}>
              <h3 style={{ color: "#A600A0" }}> Jan Doe,</h3>
            </Col>
          </Row>
        </div>
        <div className="top_body">
          <Row>
            <p>
              The table below summarizes the scores of your 360 feedback against
              each of the competencies. The higher the score the greater the
              perception that you display the behavior.
            </p>
          </Row>
          <Row>
            <Table bordered style={{ borderRadius: "1em" }}>
              <thead
                style={{
                  background: "#A600A0",
                  color: "white",
                }}
              >
                <tr>
                  <th>Score</th>
                  <th>0</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Frequency</td>
                  <td>Almost never</td>
                  <td>Not very often</td>
                  <td>Some of the time</td>
                  <td>Most of the time</td>
                  <td>Never always</td>
                </tr>
                <tr>
                  <td>Ability</td>
                  <td>Clear weekness</td>
                  <td>Not very good</td>
                  <td>Good</td>
                  <td>Very good</td>
                  <td>Clear Strength</td>
                </tr>
                <tr>
                  <td>Effectiveness</td>
                  <td>1-20%</td>
                  <td>21-40%</td>
                  <td>41-60%</td>
                  <td>61-80%</td>
                  <td>81-10%</td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row>
            <QuestionContainer>
              <div className="header">
                <Row>
                  <Col
                    md={"auto"}
                    style={{ width: "40px", padding: "0px" }}
                  ></Col>
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
                {competencies_questions.map((val, key) => {
                  return (
                    <Row
                      style={{ height: "80px", alignItems: "center" }}
                      key={key}
                    >
                      <Col
                        md={"auto"}
                        style={{ width: "40px", padding: "0px" }}
                      >
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
                })}
              </div>
            </QuestionContainer>
          </Row>
        </div>
      </div>
    </ResultsContainer>
  );
};

export default Results;
