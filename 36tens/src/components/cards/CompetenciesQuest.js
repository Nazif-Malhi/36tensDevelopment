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
import { BiChevronRight } from "react-icons/bi";

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
      <Col md={"auto"}>
        <h4 style={{ color: "#6C6A6A", marginBottom: "30px" }}>
          {competencies_questions[index].questions[quest]}
        </h4>
      </Col>
    </>
  );
};
const CompetenciesQuest = ({ type, index }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [progress, setProgress] = React.useState(0);

  let initialprogress =
    100 / competencies_questions[index].questions.length - 1;

  useEffect(() => {
    setQuestionIndex(0);
    setProgress(initialprogress);
  }, [index]);

  const handleClick = () => {
    if (
      type &&
      questionIndex < competencies_questions[index].questions.length - 1
    )
      setQuestionIndex(questionIndex + 1);
    let currentProgress =
      (questionIndex * 100) / competencies_questions[index].questions.length -
      1;
    setProgress(
      // 100 / competencies_questions[index].questions.length -
      //   1 +
      currentProgress + initialprogress
    );
  };
  return (
    <QuestionContainer>
      <div className="text">
        <h5>competencies</h5>
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
        <Row style={{ alignItems: "flex-end" }}>
          <CustomButton
            type={"normal textnormal margin-top floatRight"}
            width="120px"
            height="40px"
            onClick={() => handleClick()}
          >
            {type ? (
              <>
                Next <BiChevronRight style={{ fontSize: "1.5rem" }} />
              </>
            ) : (
              "Add New"
            )}
          </CustomButton>
        </Row>
      </div>
      <Row style={{ width: "100%" }}>
        <Col md={"auto"}>
          <p style={{ margin: 0 }}>
            <b>
              {questionIndex + 1} of{" "}
              {competencies_questions[index].questions.length}
            </b>
          </p>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
        </Col>
      </Row>
    </QuestionContainer>
  );
};

export default CompetenciesQuest;
