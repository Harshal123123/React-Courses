import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeListng from "./EmployeeListng";
import EmpCreate from "./EmpCreate";
import { EmpaDetails } from "./EmpaDetails";
import EmpEdit from "./EmpEdit";

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeListng />}></Route>
          <Route path="/employee/create" element={<EmpCreate />}></Route>
          <Route
            path="/employee/detail/:empid"
            element={<EmpaDetails />}
          ></Route>
          <Route path="/employee/edit/:empid" element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
