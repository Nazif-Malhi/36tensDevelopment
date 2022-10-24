import React from "react";
import DataTable from "react-data-table-component";

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
