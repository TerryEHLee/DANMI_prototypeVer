//src/api/classes.js

import api from "../axios/api";

const getClasses = async () => {
  const response = await api.get(`/classes`);
  return response.data;
};

const addClass = async (newClass) => {
  await api.post(`/classes`.newClass);
};

const deleteClass = async (id) => {
  await api.delete(`/classes/${id}`);
};

export { getClasses, addClass, deleteClass };
