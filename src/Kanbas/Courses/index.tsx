import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import { FaAlignJustify } from 'react-icons/fa';
import PeopleTable from './People/Table';
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  return (
    <div id="wd-courses" style={{marginLeft: "150px"}}>
      <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      Course 1234 </h2> <hr />
      <div className="d-flex">
      <div className="d-none d-md-block">
        <CoursesNavigation />
        </div>
        <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable />} />
            </Routes>
      </div></div>
    </div>

);}

  