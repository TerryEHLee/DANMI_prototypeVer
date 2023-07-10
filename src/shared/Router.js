import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import UserSelect from "../pages/userSelect/UserSelect";
import Class from "../pages/class/Class";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserSelect />} />
        <Route path='/class' element={<Class />} />
        {/* <Route path="/join" element={<Join />} />
        <Route path="/write" element={<Write />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
