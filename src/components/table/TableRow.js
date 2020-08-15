import React from "react";

const TableRow = ({ item, columnNames }) => {
  return (
    <tr>
      {columnNames.map((key) => {
        return <td>{item[key]}</td>;
      })}
    </tr>
  );
};
export default TableRow;
