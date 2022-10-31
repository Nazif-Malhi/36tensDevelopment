import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { InputContact } from "../components/input";
import { BiFilterAlt } from "react-icons/bi";
import CustomButton from "../components/Custombutton";
import CustomDataTable from "../components/DataTable/CustomDataTable";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { rowsGroup, rowsInd, rowsPosition } from "../assets/Data/Database";
import { FeildsModal } from "../components/modals/masterModal";

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  .iconwrapper {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    border-radius: 7px;
    width: 40px;
    height: 40px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  .iconwrapper:hover {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;
const FeildsContainer = styled.div`
  width: 100%;
  height: 100%;
  .header {
    display: flex;
    justify-content: right;
    align-items: end;
    height: 60px;
    width: 90%;
  }
  .body {
    width: 100%;
    display: flex;
    height: calc(100% - 60px);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .workforcewrapper {
      width: 80%;
      height: 100%;

      .options {
        width: 60%;
      }
    }
  }
`;

const columnsIndividual = [
  {
    name: "ID",
    selector: (row) => row.id,
    omit: true,
  },
  {
    name: "Name",
    selector: (row) => row.Name,
    sortable: true,
    width: "820px",
  },
  {
    name: "Actions",
    cell: (row) => (
      <div style={{ display: "flex" }}>
        <Edit onClickHandle={() => handleEdit(row.id)} />
        <Delete onClickHandle={() => handleDelete(row.id)} />
      </div>
    ),
    center: true,
  },
];

const Edit = ({ onClickHandle }) => {
  return (
    <ActionContainer onClick={() => onClickHandle()}>
      <div className="iconwrapper">
        <CiEdit color="black" fontSize={"1.5rem"} />
      </div>
    </ActionContainer>
  );
};
const Delete = ({ onClickHandle }) => {
  return (
    <ActionContainer onClick={() => onClickHandle()}>
      <div className="iconwrapper">
        <MdDelete color="red" fontSize={"1.5rem"} />
      </div>
    </ActionContainer>
  );
};

const handleEdit = (id) => {
  //   setAppraisee(id);
  //   setEditRequestAppraisee(true);
  //   setAppraiseeModal(true);
};
const handleDelete = (id) => {
  alert("Delete: " + id);
};

const Feilds = () => {
  const [state, setState] = useState("Individuals");
  const [modal, setModal] = useState(false);

  return (
    <FeildsContainer>
      <div className="header">
        <Row style={{ width: "100%", height: "100%" }}>
          <Col style={{ alignItems: "center", display: "flex" }}>
            <h1 style={{ margin: "0", marginLeft: "100px" }}>Masters</h1>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <CustomButton
              type={"normal textnormal margin-right"}
              width="120px"
              height="40px"
              onClick={() => {
                setState("Individuals");
              }}
            >
              Individuals
            </CustomButton>
            <CustomButton
              type={"normal textnormal margin-right"}
              width="120px"
              height="40px"
              onClick={() => {
                setState("Positions");
              }}
            >
              Positions
            </CustomButton>
            <CustomButton
              type={"normal textnormal"}
              width="120px"
              height="40px"
              onClick={() => {
                setState("Groups");
              }}
            >
              Groups
            </CustomButton>
          </Col>
        </Row>
      </div>
      <div className="body">
        <div className="workforcewrapper">
          <Row style={{ margin: "10px 0px" }}>
            <Col>
              <CustomButton
                type={"normal textnormal margin-right margin-top"}
                width="160px"
                height="40px"
                onClick={() => {
                  setModal(true);
                }}
              >
                <AiOutlinePlus fontSize={"1.2rem"} /> Add {state}
              </CustomButton>
            </Col>
          </Row>

          <CustomDataTable
            column={columnsIndividual}
            row={
              state === "Individuals"
                ? rowsInd
                : state === "Positions"
                ? rowsPosition
                : state === "Groups"
                ? rowsGroup
                : null
            }
          />
        </div>
      </div>

      <FeildsModal
        show={modal}
        onHide={() => {
          setModal(false);
        }}
        type={state}
      />
    </FeildsContainer>
  );
};

export default Feilds;
