import React from "react";

const TableResult = ({ names }) => {
  return (
    <tfoot>
      <tr>
        {names.map((item) => {
          return <th>{item}</th>;
        })}
      </tr>
    </tfoot>
  );
}

export default  TableResult;