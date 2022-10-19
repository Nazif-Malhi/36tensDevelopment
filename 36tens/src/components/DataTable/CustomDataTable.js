import React from "react";
import DataTable from "react-data-table-component";
import { Row, Col } from "react-bootstrap";
import { InputContact } from "../input";
import CustomButton from "../Custombutton";
import { BiFilterAlt } from "react-icons/bi";

const Filter = () => {
  <Row>
    <Col xs={6} md={4}>
      <InputContact placeholder={`Search`} />
    </Col>
    <Col>
      <CustomButton type={"normal textnormal"} width="120px" height="40px">
        <BiFilterAlt /> Filter
      </CustomButton>
    </Col>
  </Row>;
};
const CustomDataTable = ({ column, row }) => {
  return (
    <DataTable
      columns={column}
      data={row}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="400px"
      selectableRows
      selectableRowsHighlight
      highlightOnHover
    />
  );
};

export default CustomDataTable;
