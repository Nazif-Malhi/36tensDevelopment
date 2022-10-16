import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const Head = styled.div`
  width: 100%;
  border-bottom: 2px solid #edeff2;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  p {
    font-weight: 500;
  }
`;

const TableHeading = ({ columnName, action }) => {
  const heading = columnName[0];
  const remaining = columnName.slice(1);
  return (
    <Head>
      <Row style={{ width: "100%" }}>
        <Col xs={6} md={4}>
          <p>{heading}</p>
        </Col>
        {remaining.map((key, index) => (
          <Col>
            <p>{key}</p>
          </Col>
        ))}
        {action ? (
          <Col style={{ textAlign: "center" }}>
            <p>action</p>
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Head>
  );
};

export default TableHeading;
