import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomButton from "../components/Custombutton";
import { AiOutlinePlus } from "react-icons/ai";
import { Row, Col } from "react-bootstrap";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "../components/table/Table";

import {
  AppraiseeModal,
  CreateSurveyModal,
  UploadCsvModal,
} from "../components/modals/surveyModals";
import { SurveyCreation } from "../assets/Data/Database";
import TableHeading from "../components/table/TableHeading";

const SurveyContainer = styled.div`
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

const Surveys = () => {
  const [recentlyUpdated, setRecentlyUpdated] = useState("");
  const [allTypes, setAllTypes] = useState("");
  const [active, setActive] = useState("");

  const [dumyData, setDumyData] = useState([]);

  // Modals
  const [appraiseeModal, setAppraiseeModal] = useState(false);
  const [uploadCSV_Modal, setUploadCSV_Modal] = useState(false);
  const [createSurvey_Modal, setSurvey_Modal] = useState(false);

  const handleRecentlyUpdated = (event) => {
    setRecentlyUpdated(event.target.value);
  };
  const handleAllTypes = (event) => {
    setAllTypes(event.target.value);
  };
  const handleActive = (event) => {
    setActive(event.target.value);
  };

  // const create survey

  const createSurveyMethod = (val) => {
    SurveyCreation.push(val);
  };

  useEffect(() => {
    setDumyData(SurveyCreation);
  }, [createSurvey_Modal]);
  return (
    <>
      <SurveyContainer>
        <div className="header">
          <CustomButton
            type={"normal textnormal margin-right"}
            width="200px"
            height="40px"
            onClick={() => setAppraiseeModal(true)}
          >
            <AiOutlinePlus /> Add New Appraisee
          </CustomButton>
          <CustomButton
            type={"normal textnormal"}
            width="120px"
            height="40px"
            onClick={() => setUploadCSV_Modal(true)}
          >
            <AiOutlinePlus /> Bulk Add
          </CustomButton>
        </div>
        <div className="body">
          <div className="surveyWrapper">
            <h1>Surveys Creation</h1>
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
                        <em>Recently Created</em>
                      </MenuItem>
                      <MenuItem value={10}>Recently Updated</MenuItem>
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
                      <MenuItem value={10}>Standard</MenuItem>
                      <MenuItem value={20}>Custom</MenuItem>
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
                      <MenuItem value={10}>Completed</MenuItem>
                    </Select>
                  </FormControl>
                </Col>
              </Row>
            </div>
            <TableHeading
              columnName={["Name", "Questions", "Responses", "Completion Rate"]}
              action={true}
            />
            {dumyData.map((val, key) => {
              return <Table name={val.name} quest={38} res={"10"} rate={80} />;
            })}
            {/* <Table /> */}

            <div className="border" />

            <CustomButton
              type={"normal textnormal margin-top floatRight"}
              width="220px"
              height="40px"
              onClick={() => setSurvey_Modal(true)}
            >
              Create New Survey
            </CustomButton>
          </div>
        </div>
      </SurveyContainer>

      {/* Using Modals */}
      <AppraiseeModal
        show={appraiseeModal}
        onHide={() => setAppraiseeModal(false)}
      />
      <UploadCsvModal
        show={uploadCSV_Modal}
        onHide={() => setUploadCSV_Modal(false)}
      />
      <CreateSurveyModal
        show={createSurvey_Modal}
        onHide={() => setSurvey_Modal(false)}
        createSurveyMethod={(e) => {
          createSurveyMethod(e);
        }}
      />
    </>
  );
};

export default Surveys;
