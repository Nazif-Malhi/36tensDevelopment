import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { InputContact } from "../components/input";
import { BiFilterAlt } from "react-icons/bi";
import CustomButton from "../components/Custombutton";
import DataTable from "../components/DataTable/DataTable";
// import DataTable from "../layout/DataTable";
import { People } from "../assets/images";

const columns = ["name", "email", "phone", "tag"];

const rows = ["Neil", "Neil@fifthtought.com", "032-1332-0999", "Administrator"];
const WorkforceContainer = styled.div`
  width: 100%;
  height: 100%;
  .body {
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .workforcewrapper {
      width: 80%;
      height: calc(100% - 60px);
      .options {
        width: 60%;
      }
    }
  }
`;
const Workforce = () => {
  return (
    <WorkforceContainer>
      <div className="body">
        <div className="workforcewrapper">
          <h1>Workforce</h1>
          <Row>
            <Col xs={6} md={4}>
              <InputContact placeholder={`Search`} />
            </Col>
            <Col>
              <CustomButton
                type={"normal textnormal"}
                width="120px"
                height="40px"
                // onClick={() => setUploadCSV_Modal(true)}
              >
                <BiFilterAlt /> Filter
              </CustomButton>
            </Col>
          </Row>
          <DataTable column={columns} rows={rows} />
          {/* <DataTable /> */}
        </div>
      </div>
    </WorkforceContainer>
  );
};

export default Workforce;
