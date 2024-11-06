import { useParams } from "react-router";
import * as db from "../../Database";
import ModulesControls from './ModulesControls'; 
import LessonControlButtons from './LessonControlButtons'; 
import { BsGripVertical } from 'react-icons/bs'; 

export default function Modules() {
  const { cid } = useParams(); 
  const modules = db.modules; 


  const filteredModules = modules.filter(module => module.course === cid);

  return (
    <div>
      <div id="wd-modules-controls" className="text-nowrap mb-3">
        <ModulesControls />
      </div>
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {filteredModules.length > 0 ? (
          filteredModules.map((module) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> {module.name}
                <ModulesControls /> 
              </div>
              {module.lessons && module.lessons.length > 0 && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson) => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                      <LessonControlButtons /> 
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