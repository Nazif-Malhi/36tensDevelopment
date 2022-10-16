import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "../components/Custombutton";
import { AiOutlinePlus } from "react-icons/ai";
import { Row, Col } from "react-bootstrap";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "../components/table/Table";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { TextField } from "@mui/material";

const SurveyContainer = styled.div`
  width: 100%;
  height: 100%;

  .header {
    display: flex;
    justify-content: right;
    align-items: end;
    height: 60px;
    width: 80%;
  }
  .body {
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    justify-content: center;
    align-items: center;

    .surveyWrapper {
      width: 80%;

      height: calc(100% - 60px);
      .options {
        width: 60%;
      }
    }
    .border {
      border-bottom: 2px solid #edeff2;
      margin-top: 10px;
    }
  }
`;

function AppraiseeModal(props) {
  const [Designation, setDesignation] = useState("");

  const handleDesignation = (event) => {
    setDesignation(event.target.value);
  };
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
                fullWidth
              />
            </Col>
            <Col xs={6} md={4}>
              <TextField
                id="outlined-name"
                label="Last Name"
                size="small"
                fullWidth
              />
            </Col>
            <Col xs={6} md={4}>
              <TextField
                type="date"
                id="outlined-name"
                size="small"
                fullWidth
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col xs={6} md={4}>
              <TextField
                id="outlined-name"
                label="Department"
                size="small"
                fullWidth
              />
            </Col>
            <Col xs={12} md={8}>
              <TextField
                id="outlined-name"
                label="Email"
                size="small"
                fullWidth
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
                  value={Designation}
                  onChange={handleDesignation}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Designation</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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

const Surveys = () => {
  const [recentlyUpdated, setRecentlyUpdated] = useState("");
  const [allTypes, setAllTypes] = useState("");
  const [active, setActive] = useState("");
  const [appraiseeModal, setAppraiseeModal] = useState(false);

  const handleRecentlyUpdated = (event) => {
    setRecentlyUpdated(event.target.value);
  };
  const handleAllTypes = (event) => {
    setAllTypes(event.target.value);
  };
  const handleActive = (event) => {
    setActive(event.target.value);
  };
  return (
    <>
      <SurveyContainer>
        <div className="header">
          <CustomButton
            type={"normal textnormal margin-right"}
            width="220px"
            height="40px"
            onClick={() => setAppraiseeModal(true)}
          >
            <AiOutlinePlus /> Add New Appraisee
          </CustomButton>
          <CustomButton type={"normal textnormal"} width="220px" height="40px">
            <AiOutlinePlus /> Bulk Add
          </CustomButton>
        </div>
        <div className="body">
          <div className="surveyWrapper">
            <h1>Surveys</h1>
            <div className="options">
              <Row>
                <Col>
                  <FormControl
                    sx={{ width: "100%" }}
                    size="small"
                    style={{ background: "white" }}
                  >
                    <Select
                      value={recentlyUpdated}
                      onChange={handleRecentlyUpdated}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>Recently Updated</em>
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
                      value={allTypes}
                      onChange={handleAllTypes}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>All Types</em>
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
                      value={active}
                      onChange={handleActive}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>Active</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Col>
              </Row>
            </div>
            <Table />
            <div className="border" />
            <CustomButton
              type={"normal textnormal margin-top floatRight"}
              width="220px"
              height="40px"
            >
              Create New Survey
            </CustomButton>
          </div>
        </div>
      </SurveyContainer>
      <AppraiseeModal
        show={appraiseeModal}
        onHide={() => setAppraiseeModal(false)}
      />
    </>
  );
};

export default Surveys;
