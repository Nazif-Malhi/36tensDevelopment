import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
// import { Checkbox } from "@mui/material";

const MarkingContainer = styled.div`
  width: 60%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TextContainer = styled.div`
  width: 75%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Box = styled.div`
  width: 12%;
  height: 100%;
  border: 1.4px solid rgba(108, 106, 106, 0.42);
  border-radius: 8px;
  border-radius: 7px;
  color: #6c6a6a;
  display: flex;
  justify-content: center;
  align-items: center;
  h5 {
    margin: 5px;
  }
`;
const Text = styled.div`
  width: 28%;
  height: 100%;
  color: #6c6a6a;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  p {
    margin: 5px;
  }
`;
const Marking = () => {
  return (
    <>
      <MarkingContainer>
        <Row
          style={{
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <h5>0</h5>
          </Box>
          <Box>
            <h5>1</h5>
          </Box>
          <Box>
            <h5>2</h5>
          </Box>
          <Box>
            <h5>3</h5>
          </Box>
          <Box>
            <h5>4</h5>
          </Box>
        </Row>
      </MarkingContainer>
      <TextContainer>
        <Row
          style={{
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text>
            <p>Least Likely</p>
          </Text>
          <Text>
            <p>Neutral</p>
          </Text>
          <Text>
            <p>Most Likely</p>
          </Text>
        </Row>
      </TextContainer>
      {/* <Row>
        <Col md="auto" style={{ display: "flex" }}>
          <Checkbox defaultChecked color="secondary" />{" "}
        </Col>
        <Col
          style={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <p style={{ margin: "0px", color: "#979797" }}>Must required</p>
        </Col>
      </Row> */}
    </>
  );
};

export default Marking;
