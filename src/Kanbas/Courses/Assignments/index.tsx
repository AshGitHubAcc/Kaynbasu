


import ModulesControls from "../Modules/ModuleControls";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import React, { useState } from "react";
import { addModule, editModule, updateModule, deleteModule }
  from "../Modules/reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName}  
      addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }} /> <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <ModuleControlButtons moduleId="null" deleteModule={deleteModule} editModule={(moduleId) => dispatch(editModule(moduleId))} />
        </div>
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <ul className="wd-lessons list-group rounded-0">
              {assignment.title && (
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <Link
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link text-black"
                    style={{ textDecoration: 'none' }}>
                    <BsGripVertical className="me-2 fs-3" /> {assignment.title} <LessonControlButtons />
                  </Link>
                </li>
              )}
            </ul>))}
      </ul>
    </div>
  );
}
