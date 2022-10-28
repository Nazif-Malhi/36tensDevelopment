import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomButton from "../components/Custombutton";
import { Row, Col } from "react-bootstrap";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "../components/table/Table";

import { CreateSurveyModal } from "../components/modals/surveyModals";
import { SurveyCreation } from "../assets/Data/Database";
import TableHeading from "../components/table/TableHeading";
import Pagination from "react-custom-pagination";

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

  const [createSurvey_Modal, setSurvey_Modal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const paginate = (number) => {
    setCurrentPage(number);
  };

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
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <CustomButton
                type={"normal textnormal margin-top floatRight"}
                width="220px"
                height="40px"
                onClick={() => setSurvey_Modal(true)}
              >
                Create New Survey
              </CustomButton>
            </Col>
          </Row>
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
            <div style={{ width: "500px" }}>
              <Pagination
                totalPosts={dumyData.length}
                postsPerPage={postsPerPage}
                paginate={paginate}
                view={5}
                showLast={true}
                showFirst={true}
                showIndex={true}
              />
            </div>
            {/* <Table /> */}

            <div className="border" />
          </div>
        </div>
      </SurveyContainer>

      {/* Using Modals */}

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
