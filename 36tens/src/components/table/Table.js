import React from "react";
import TableBody from "./TableBody";

const Table = ({ name, quest, res, rate }) => {
  var date = Date(Date.now());
  return (
    <TableBody
      color={rate === 100 ? "#9c27b0" : "black"}
      name={name}
      des={date}
      questions={quest}
      response={res}
      rate={rate}
    />
  );
};

export default Table;
