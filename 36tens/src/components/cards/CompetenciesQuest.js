import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiPencil } from "react-icons/bi";
import Input from "@mui/material/Input";
import { InputNoBorder } from "../input";
import { Row, Col } from "react-bootstrap";
import Marking from "./Marking";
import { display } from "@mui/system";
import { competencies_questions } from "../../assets/Data/CompetenciesData";

import CustomButton from "../Custombutton";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

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
      margin-left: 11%;
      margin-top: 7%;
    }
  }
  .wrapper_question {
    width: 80%;
    height: 70%;
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
    .buttonWrapperdouble {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 80px;
      width: 100%;
    }
  }
`;

const NewQuestion = () => {
  return (
    <>
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
    </>
  );
};
const ShowQuestion = ({ index, quest }) => {
  return (
    <>
      <Col md={"auto"} style={{ height: "80px" }}>
        <h5 style={{ color: "#6C6A6A", marginBottom: "30px" }}>
          {competencies_questions[index].questions[quest]}
        </h5>
      </Col>
    </>
  );
};

const CompetenciesQuest = ({ type, index }) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    setQuestionIndex(0);
  }, [index]);

  const handleNext = () => {
    if (
      type &&
      questionIndex < competencies_questions[index].questions.length - 1
    ) {
      setQuestionIndex(questionIndex + 1);
    }
  };
  const handleBack = () => {
    if (type && questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };
  return (
    <QuestionContainer>
      <div className="text">
        <h5>{competencies_questions[index].heading}</h5>
      </div>
      <div className="wrapper_question">
        <Row style={{ width: "100%" }}>
          {type ? (
            <ShowQuestion index={index} quest={questionIndex} />
          ) : (
            <NewQuestion />
          )}
        </Row>
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Marking />
        </Row>
        <Row style={{ width: "100%" }}>
          <div className="buttonWrapperdouble">
            <CustomButton
              type={`normal textnormal margin-top floatRight ${
                questionIndex > 0 ? null : "disabled"
              }`}
              width="120px"
              height="40px"
              onClick={() => handleBack()}
            >
              <BiChevronLeft style={{ fontSize: "1.5rem" }} /> Back
            </CustomButton>
            <CustomButton
              type={"normal textnormal margin-top floatRight"}
              width="120px"
              height="40px"
              onClick={() => handleNext()}
            >
              {type ? (
                <>
                  Next <BiChevronRight style={{ fontSize: "1.5rem" }} />
                </>
              ) : (
                "Add New"
              )}
            </CustomButton>
          </div>
        </Row>
      </div>
      {type ? (
        <Row style={{ width: "100%", justifyContent: "right" }}>
          <Col md={"auto"}>
            <p style={{ margin: "0px 50px" }}>
              <b>
                {questionIndex + 1} of{" "}
                {competencies_questions[index].questions.length}
              </b>
            </p>
          </Col>
        </Row>
      ) : null}
    </QuestionContainer>
  );
};

export default CompetenciesQuest;
