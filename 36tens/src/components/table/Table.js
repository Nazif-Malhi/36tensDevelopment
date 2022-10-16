import React from "react";
import TableBody from "./TableBody";
import TableHeading from "./TableHeading";

const Table = () => {
  return (
    <React.Fragment>
      <TableHeading
        columnName={["Name", "Questions", "Responses", "Completion Rate"]}
        action={true}
      />
      <TableBody
        color="black"
        name="New Sample Survey"
        des="25 August 2022 03:00 PM"
        questions={"20"}
        response={"4"}
        rate={"10"}
      />
    </React.Fragment>
  );
};

export default Table;
