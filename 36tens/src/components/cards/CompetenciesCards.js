import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { Row, Col } from "react-bootstrap";

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
const CompetenciesCards = ({ title, handleClick, type }) => {
  return (
    <Wrapper onClick={handleClick}>
      <Row style={{ width: "100%" }}>
        <Col>
          <h5>{title}</h5>
        </Col>
        <Col md={"auto"}>
          {type === "add" ? (
            <AiOutlinePlus style={{ fontSize: "1.5rem" }} />
          ) : (
            <MdOutlineDelete style={{ fontSize: "1.5rem" }} />
          )}
        </Col>
      </Row>
    </Wrapper>
  );
};

export default CompetenciesCards;
