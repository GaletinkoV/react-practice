import React from "react";
import TableHeader from "./TableHeader";
import TableResult from "./TableResult";
import TableRows from "./TableRows";

const TableContainer=({ data, columnNames })=> {
  //////////////////////////////////////////////////////////////////
  ////////                 Count result
  //////////////////////////////////////////////////////////////////
  // for (let i = 0; i < data.length; i++) {
  //   for (const property in data[i]) {
  //     res[property] += data[i][property];
  //   }
  // }
  // res = Object.values(res);
  // res[0] = "Total";

  return (
    <table className="table-dark table">
      <TableHeader names={columnNames} />
      <TableRows data={data} columnNames={columnNames} />
      {/* <TableResult names={res} /> */}
    </table>
  );
}

export default  TableContainer;
