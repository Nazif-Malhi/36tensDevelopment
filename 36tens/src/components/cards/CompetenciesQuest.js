import React from "react";
import styled from "styled-components";
import { BiPencil } from "react-icons/bi";
import Input from "@mui/material/Input";
import { InputNoBorder } from "../input";
import { Row, Col } from "react-bootstrap";
import Marking from "./Marking";
import { display } from "@mui/system";

const QuestionContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;
  background: white;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .text {
    width: 100%;
    h5 {
      margin-left: 15%;
      margin-top: 7%;
    }
  }
  .wrapper_question {
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input {
      font-size: larger;
      color: #979797;
      width: 100%;
      border: none;
      border-bottom: 2px solid #979797;
      :focus {
        outline: none;
      }
    }
    textarea {
      margin-top: 15px;
      border: none;
      width: 100%;
      :focus {
        outline: none;
      }
    }
  }
`;

const CompetenciesQuest = () => {
  return (
    <QuestionContainer>
      <div className="text">
        <h5>competencies</h5>
      </div>
      <div className="wrapper_question">
        <Row style={{ width: "100%" }}>
          <Col md={"auto"}>
            <h4>2.</h4>
          </Col>
          <Col>
            <input placeholder="Start Typing ..." />
            <textarea
              name="message"
              rows="2"
              cols="20"
              placeholder="Add Description ..."
            />
          </Col>
        </Row>
        <Row
          style={{ width: "100%", height: "100%", justifyContent: "center" }}
        >
          <Marking />
        </Row>
      </div>
    </QuestionContainer>
  );
};

export default CompetenciesQuest;
