import React, { useState } from "react";

const ClassModal = ({ selectedCell }) => {
  const [studentName, setStudentName] = useState("");

  const handleInputChange = (e) => {
    setStudentName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={studentName} onChange={handleInputChange} />
        <button type='submit'>학생추가</button>
      </form>
    </div>
  );
};

export default ClassModal;
