import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 100%;
  height: 50px;
  border-radius: 7px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #979797;
  cursor: pointer;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  h5 {
    padding: 0;
    margin: 0;
  }
`;
const CompetenciesCards = ({ title, question, handleClick, type, index }) => {
  return (
    <Accordion
      onClick={handleClick}
      style={{ marginBottom: "5px" }}
      key={index}
    >
      <Accordion.Item>
        <Accordion.Header>
          <Row style={{ width: "100%" }}>
            <Col>
              <h5>{title}</h5>
            </Col>
            <Col md={"auto"}>
              {type === "add" ? (
                <AiOutlinePlus style={{ fontSize: "1.5rem" }} />
              ) : type === "del" ? (
                <MdOutlineDelete style={{ fontSize: "1.5rem" }} />
              ) : null}
            </Col>
          </Row>
        </Accordion.Header>
        <Accordion.Body>
          {question?.map((val, index) => {
            return (
              <Row key={index}>
                <p key={index}>{val}</p>
              </Row>
            );
          })}
          {/* {console.log(question.length)} */}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    // <Wrapper onClick={handleClick}>

    // </Wrapper>
  );
};

export default CompetenciesCards;
