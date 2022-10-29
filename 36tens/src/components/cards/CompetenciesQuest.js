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
import { MdOutlineDone } from "react-icons/md";

const QuestionContainer = styled.div`
  width: 100%;
  height: calc(80%);
  margin-top: 20px;
  background: white;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .text {
    width: 100%;
    h5 {
      margin-left: 11%;
      margin-top: 35px;
    }
  }
  .wrapper_question {
    width: 80%;
    height: 65%;
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
      width: 90%;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      width: 20%;
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
    <>
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
          <Row style={{ width: "100%", justifyContent: "center" }}>
            <div className="buttonWrapperdouble">
              <CustomButton
                type={`normal textnormal circle ${
                  questionIndex > 0 ? null : "disabled"
                }`}
                width="40px"
                height="40px"
                onClick={() => handleBack()}
              >
                <BiChevronLeft style={{ fontSize: "1.5rem" }} />
              </CustomButton>
              <CustomButton
                type={`normal textnormal circle ${
                  questionIndex <
                  competencies_questions[index].questions.length - 1
                    ? null
                    : "disabled"
                }`}
                width="40px"
                height="40px"
                onClick={() => handleNext()}
              >
                {type ? (
                  <>
                    <BiChevronRight style={{ fontSize: "1.5rem" }} />
                  </>
                ) : (
                  "Add New"
                )}
              </CustomButton>
            </div>
          </Row>
          <Row style={{ width: "100%", justifyContent: "right" }}>
            <Col md={"auto"}>
              <p style={{ margin: "10px 0px" }}>
                <b>
                  {questionIndex + 1} of{" "}
                  {competencies_questions[index].questions.length}
                </b>
              </p>
            </Col>
          </Row>
        </div>
        {/* {type ? (
       
      ) : (
        <Row style={{ width: "100%", justifyContent: "right" }}>
          <Col md={"auto"}>
            <CustomButton
              type={"normal textnormal margin-top floatRight"}
              width="120px"
              height="40px"
            >
              Done <MdOutlineDone style={{ fontSize: "1.5rem" }} />
            </CustomButton>
          </Col>
        </Row> 
      )}*/}
      </QuestionContainer>
    </>
  );
};

export default CompetenciesQuest;
