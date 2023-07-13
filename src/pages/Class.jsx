import React from "react";
import TableData, {
  generateTableData,
} from "../redux/components/class/TableData";

function Class() {
  const tableData = generateTableData(13, 6);

  return (
    <>
      <div>
        <TableData tableData={tableData} />
      </div>
    </>
  );
}

export default Class;
