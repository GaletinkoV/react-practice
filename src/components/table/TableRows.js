import React from "react";
import TableRow from "./TableRow";

const TableRows = ({ data, columnNames }) => {
  return (
    <tbody>
      {data.map((item) => (
        <TableRow item={item} columnNames={columnNames} />
      ))}
    </tbody>
  );
};

export default TableRows;
