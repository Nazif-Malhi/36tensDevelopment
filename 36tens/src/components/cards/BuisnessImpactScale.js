import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const BuisnessImpactScaleContainer = styled.div`
  width: 100%;
  height: 332px;
  margin-top: 20px;
  background: white;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .scale_wrapper {
    height: 80%;
    width: 80%;
    h3 {
      color: #979797;
    }
  }
`;

const BuisnessImpactScale = () => {
  return (
    <BuisnessImpactScaleContainer>
      <div className="scale_wrapper">
        <Container>
          <Row style={{ marginBottom: "20px" }}>
            <h3>Buisness Impact Scale</h3>
          </Row>
          <Row>
            <Col>
              <h4>Personal Focus</h4>
            </Col>
            <Col>{/* <Slider /> */}</Col>
          </Row>
        </Container>
      </div>
    </BuisnessImpactScaleContainer>
  );
};

export default BuisnessImpactScale;
