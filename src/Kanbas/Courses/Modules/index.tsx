import { useParams } from "react-router";
import * as db from "../../Database";
import ModulesControls from './ModulesControls'; 
import LessonControlButtons from './LessonControlButtons'; 
import { BsGripVertical } from 'react-icons/bs'; 
import React, { useState } from "react";
import { addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";


interface Lesson {
  _id: string;
  name: string;
}

interface Module {
  _id: string;
  name: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
}

export default function Modules() {
  const { cid } = useParams(); 
  const [moduleName, setModuleName] = useState("");

  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const filteredModules = modules.filter((module: Module) => module.course === cid);
  
  return (
    <div>
      <div id="wd-modules-controls" className="text-nowrap mb-3">
      <ModulesControls 
          moduleName={moduleName} 
          setModuleName={setModuleName} 
          addModule={() => {
            dispatch(addModule({ name: moduleName, course: cid }));
            setModuleName("");
          }} 
        />
      </div>
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {filteredModules.length > 0 ? (
          filteredModules.map((module: Module) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> {module.name}
                <ModulesControls 
                    moduleName={moduleName} 
                    setModuleName={setModuleName} 
                    addModule={() => {
                      dispatch(addModule({ name: moduleName, course: cid }));
                      setModuleName("");
                    }} 
                />
              </div>
              {module.lessons && module.lessons.length > 0 && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson) => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      {!module.editing && module.name}
                      { module.editing && (
                          <input className="form-control w-50 d-inline-block"
                          onChange={(e) => dispatch(
                            updateModule({ ...module, name: e.target.value })
                          )
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") { 
                              dispatch(updateModule({ ...module, editing: false }));
                            }
                            }}
                          defaultValue={module.name}/>
                      )}
                      <LessonControlButtons moduleId={module._id} 
                      deleteModule={(moduleId) => {
                        dispatch(deleteModule(moduleId));
                      }}
                      editModule={(moduleId) => dispatch(editModule(moduleId))}
                       /> 
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))
        ) : (
          <li className="list-group-item text-danger">No modules found for this course.</li>
        )}
      </ul>
    </div>
  );
}