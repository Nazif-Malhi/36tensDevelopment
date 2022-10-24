import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const MarkingContainer = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Box = styled.div`
  width: 12%;
  height: 100%;
  border: 2px solid #979797;
  border-radius: 7px;
  color: #979797;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Marking = () => {
  return (
    <MarkingContainer>
      <Row
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <h4>0</h4>
        </Box>

        <Box>
          <h4>1</h4>
        </Box>
        <Box>
          <h4>2</h4>
        </Box>
        <Box>
          <h4>3</h4>
        </Box>
        <Box>
          <h4>4</h4>
        </Box>
      </Row>
    </MarkingContainer>
  );
};

export default Marking;
