import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { TextField } from "@mui/material";
import { Row, Col } from "react-bootstrap";

export function FeildsModal(props) {
  const [val, setVal] = useState("");

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="md">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New {props.type}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row style={{ marginBottom: "10px" }}>
            <TextField
              id="outlined-name"
              label={`${props.type} Name`}
              size="small"
              value={val}
              onChange={(e) => {
                setVal(e.target.value);
              }}
              fullWidth
            />
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
