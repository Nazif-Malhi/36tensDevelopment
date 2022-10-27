import React, { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { TextField } from "@mui/material";

import { AiOutlineUpload } from "react-icons/ai";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Row, Col } from "react-bootstrap";

import {
  newEmployeeDepartment,
  newEmployeeDesignation,
} from "../../assets/Data/DropDownData";

import { useNavigate } from "react-router-dom";

export function AppraiseeModal(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row style={{ marginBottom: "10px" }}>
            <Col xs={6} md={4}>
              <TextField
                id="outlined-name"
                label="First Name"
                size="small"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                fullWidth
              />
            </Col>
            <Col xs={6} md={4}>
              <TextField
                id="outlined-name"
                label="Last Name"
                size="small"
                fullWidth
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Col>
            <Col xs={6} md={4}>
              <TextField
                type="date"
                id="outlined-name"
                size="small"
                fullWidth
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col xs={6} md={4}>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <Select
                  value={department}
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Department</em>
                  </MenuItem>
                  {newEmployeeDepartment.map((val, index) => {
                    return (
                      <MenuItem id={index} value={val.val}>
                        {val.des}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Col>
            <Col xs={12} md={8}>
              <TextField
                id="outlined-name"
                label="Email"
                size="small"
                fullWidth
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <Select
                  value={designation}
                  onChange={(e) => {
                    setDesignation(e.target.value);
                  }}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Designation</em>
                  </MenuItem>
                  {newEmployeeDesignation.map((val, index) => {
                    return (
                      <MenuItem id={index} value={val.val}>
                        {val.des}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ background: "white", border: "none", color: "black" }}
          onClick={props.onHide}
        >
          Cancel
        </Button>
        <Button style={{ background: "#a600a0", border: "none" }}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function UploadCsvModal(props) {
  const Upload = styled.div`
    border-radius: 7px;
    width: 100%;
    height: 220px;
    border: 2px dashed #a2abb6;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    :hover {
      border: 2px dashed #3b4f66;
      color: #3b4f66;
      h6 {
        color: #3b4f66;
      }
    }
    p {
      color: #a2abb6;
    }
    h6 {
      color: #a2abb6;
    }
  `;
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Upload CSV</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <p style={{ color: "#a2abb6" }}>File.csv/File.txt</p>
          <Upload>
            <AiOutlineUpload style={{ fontSize: "5.7rem", color: "a2abb6" }} />
            <h6>Drag & Drop here</h6>
          </Upload>
          <Row style={{ textAlign: "right" }}>
            <p style={{ color: "#a2abb6" }}>
              Can't Import ? <a href="/needhelp">Need Help</a>
            </p>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ background: "white", border: "none", color: "black" }}
          onClick={props.onHide}
        >
          Cancel
        </Button>
        <Button style={{ background: "#a600a0", border: "none" }}>
          Create Survey
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function CreateSurveyModal(props) {
  const [surveyName, setSurveyName] = useState("");

  const [category, setCategory] = useState("");
  const [relation, setRelation] = useState("");
  const [appraisee, setAppraisee] = useState("");

  const navigate = useNavigate();

  const handleCreation = () => {
    const dumyData = {
      name: surveyName,
      category: category,
      relation: relation,
      appraisee: appraisee,
    };

    setSurveyName("");
    setCategory("");
    setRelation("");
    setAppraisee("");
    props.onHide();
    navigate("/admin/competencies");
    return dumyData;
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Name Your Survey
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row style={{ marginBottom: "10px" }}>
            <Col>
              <TextField
                id="outlined-name"
                label="Survey Name"
                size="small"
                fullWidth
                value={surveyName}
                onChange={(e) => setSurveyName(e.target.value)}
              />
            </Col>
            <Col>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Category</em>
                  </MenuItem>
                  <MenuItem value={10}>Standard</MenuItem>
                  <MenuItem value={20}>Custom</MenuItem>
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <Select
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Relationships</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Col>
            <Col>
              <FormControl
                sx={{ width: "100%" }}
                size="small"
                style={{ background: "white" }}
              >
                <Select
                  value={appraisee}
                  onChange={(e) => setAppraisee(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Select Appraisers</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Col>
          </Row>

          {/* <Row>
              <Col md="auto">
                <Checkbox defaultChecked color="secondary" />{" "}
              </Col>
              <Col
                style={{
                  textAlign: "left",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ padding: "0px", margin: "0px" }}>
                  I have imported appraisee
                </p>
              </Col>
            </Row> */}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ background: "white", border: "none", color: "black" }}
          onClick={props.onHide}
        >
          Cancel
        </Button>
        <Button
          style={{ background: "#a600a0", border: "none" }}
          onClick={() => {
            props.createSurveyMethod(handleCreation());
          }}
        >
          Create Survey
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
