import React from "react";
import TableData from "./TableData";

class Class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableData: [],
    };
  }

  componentDidMount() {
    const tableData = generateTableData(13, 6);
    this.setState({ tableData });
  }

  render() {
    const { tableData } = this.state;

    return (
      <div>
        <TableData tableData={tableData} />
      </div>
    );
  }
}

export default Class;

function generateTableData(rows, columns) {
  const tableData = [];
  const daysOfWeek = ["", "Mon", "Tue", "Wed", "Thu", "Fri"];
  tableData.push(daysOfWeek);

  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let j = 0; j < columns; j++) {
      const cell = `Row ${i + 1}, Cell ${j + 1}`;
      row.push(cell);
    }

    tableData.push(row);
  }

  return tableData;
}
