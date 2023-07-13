import React, { useState } from "react";
import styled from "styled-components";
import ClassModal from "./ClassModal";
import { getClasses } from "../../../api/classes";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const TableContainer = styled.div``;

const CellBox = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 1px;
`;

const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: white;
  margin: 20% auto;
  padding: 20px;
  border: 1px solid black;
  width: 200px;
  height: 100px;
`;

const Close = styled.span`
  float: right;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const TableData = () => {
  const [selectedCell, setSelectedCell] = useState(null);
  const { isLoading, isError, data } = useQuery("classes", getClasses);
  const tableData = generateTableData(13, 6);

  const navigate = useNavigate();

  const handleCellClick = (cell) => {
    setSelectedCell(cell);
  };

  const handleCloseModal = () => {
    setSelectedCell(null);
  };

  const applyDataToCell = (cell) => {
    const matchingData = data?.class.find((item) => item.id === cell.id);
    if (matchingData && matchingData.student) {
      return matchingData.student;
    } else {
      return "➕";
    }
  };

  return (
    <>
      <h1>단미필라테스 수업 시간표</h1>
      <TableContainer>
        <table>
          <tbody>
            {tableData?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  if (rowIndex === 0 && cellIndex === 0) {
                    // Top-left cell with "time"
                    return (
                      <td key={cellIndex}>
                        <CellBox>{cell}</CellBox>
                      </td>
                    );
                  } else if (rowIndex === 0) {
                    // Top row with daysOfWeek
                    return (
                      <td key={cellIndex}>
                        <CellBox>{cell}</CellBox>
                      </td>
                    );
                  } else if (cellIndex === 0) {
                    // Leftmost column with timeValues
                    return (
                      <td key={cellIndex}>
                        <CellBox>{cell}</CellBox>
                      </td>
                    );
                  } else {
                    // Other cells
                    return (
                      <td key={cellIndex} onClick={() => handleCellClick(cell)}>
                        <CellBox>{applyDataToCell(cell)}</CellBox>
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
        {selectedCell && (
          <Modal>
            <ModalContent>
              <Close onClick={handleCloseModal}>×</Close>
              <ClassModal selectedCell={selectedCell} />
            </ModalContent>
          </Modal>
        )}
      </TableContainer>
    </>
  );
};

export function generateTableData(rows, columns) {
  const tableData = [];

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const timeValues = Array.from({ length: rows }, (_, index) => {
    const hour = index + 9; // Start from 9:00
    return `${hour}:00`;
  });

  const headerRow = ["🧸", ...daysOfWeek];
  tableData.push(headerRow); // Add a row with daysOfWeek

  for (let i = 0; i < rows; i++) {
    const row = [timeValues[i], ...daysOfWeek.map(() => "Empty")];
    tableData.push(row);
  }

  return tableData;
}

export default TableData;
