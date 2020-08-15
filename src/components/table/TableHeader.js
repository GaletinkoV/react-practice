import React from "react";

const TableHeader = ({ names }) => {
  return (
    <thead>
      <tr>
        {names.map((item) => {
          return (
            <th>
              <button>*</button>
              {item}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
