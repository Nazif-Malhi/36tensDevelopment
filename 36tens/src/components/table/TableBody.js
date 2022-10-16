import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Body = styled.div`
  width: 100%;
  height: 68px;
  background: #e9eaf6;
  border: 12px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  padding: 15px;

  .wrapper {
    display: flex;
    align-items: center;
  }
  h4 {
    font-weight: 400;
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
  p {
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 12px;
  }
`;
const Color = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;
const TextContainer = styled.div`
  margin-left: 10px;
`;
const TableBody = ({ color, name, des, questions, response, rate }) => {
  const [action, setAction] = useState("");
  const handleAction = (event) => {
    setAction(event.target.value);
  };
  return (
    <Body>
      <Row style={{ width: "100%" }}>
        <Col xs={6} md={4}>
          <div className="wrapper">
            <Color style={{ backgroundColor: color }} />
            <TextContainer>
              <h4>{name}</h4>
              <p>Last Modified on: {des}</p>
            </TextContainer>
          </div>
        </Col>
        <Col style={{ display: "flex", alignItems: "center" }}>
          <h4>{questions}</h4>
        </Col>
        <Col style={{ display: "flex", alignItems: "center" }}>
          <h4>{response}</h4>
        </Col>
        <Col style={{ display: "flex", alignItems: "center" }}>
          <h4>{rate}%</h4>
        </Col>
        <Col>
          <FormControl
            sx={{ width: "100%" }}
            size="small"
            style={{ background: "white" }}
          >
            <Select
              value={action}
              onChange={handleAction}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Action</em>
              </MenuItem>
              <MenuItem value={10}>Update</MenuItem>
              <MenuItem value={20}>Delete</MenuItem>
            </Select>
          </FormControl>
        </Col>
      </Row>
    </Body>
  );
};

export default TableBody;
