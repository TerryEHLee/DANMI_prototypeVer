import React from "react";

const TableData = ({ tableData }) => {
  return (
    <table>
      <tbody>
        {tableData?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
