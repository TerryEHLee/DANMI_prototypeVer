import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { styled } from "styled-components";
import useInput from "../../hooks/useInput";
import { addClass } from "../../../api/classes";
import { v4 as uuidv4 } from "uuid";

const ClassModal = ({ selectedCell }) => {
  const [studentName, setStudentName] = useState("");
  const [classroom, setClassroom] = useState("");
  const [isClassDone, setIsClassDone] = useState(false);

  const QueryClient = useQueryClient();
  const mutation = useMutation(addClass, {
    onSuccess: () => {
      QueryClient.invalidateQueries("classes");
    },
  });

  const handleChangeStudentName = (e) => {
    setStudentName(e.target.value);
  };

  const handleChangeClassroom = (e) => {
    setClassroom(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newClass = {
      id: uuidv4(),
      studentName,
      classroom,
      isClassDone,
    };

    mutation.mutate(newClass);

    setStudentName("");
    setClassroom("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={studentName}
          onChange={handleChangeStudentName}
        />
        <button type='submit'>학생추가</button>
      </form>
    </div>
  );
};

export default ClassModal;
