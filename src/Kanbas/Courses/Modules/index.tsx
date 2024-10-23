import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModuleControls";
import GreenIcons from "./GreenIcon";

export default function Modules() {
    return (
        <div>
          <div id="wd-modules-controls" className="text-nowrap mb-3">
              <ModulesControls />
          </div>
          <br />
          <ul id="wd-modules" className="list-group rounded-0">
              <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                  <div className="wd-title p-3 ps-2 bg-secondary"> Week 1 </div>
                  <ul className="wd-lessons list-group rounded-0">
                      <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                          LEARNING OBJECTIVES
                          <LessonControlButtons />
                      </li>
                      <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                          Introduction to the course
                          <LessonControlButtons />
                      </li>
                      <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                          Learn what is Web Development
                          <LessonControlButtons />
                      </li>
                      <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                          LESSON 1
                          <LessonControlButtons />
                      </li>
                      <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                          LESSON 2
                          <LessonControlButtons />
                      </li>
                  </ul>
              </li>
              <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                  <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
                  <ul className="wd-lessons list-group rounded-0">
                      <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                          LEARNING OBJECTIVES
                          <LessonControlButtons />
                      </li>
                      <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                          LESSON 1
                          <LessonControlButtons />
                      </li>
                      <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                          LESSON 2
                          <LessonControlButtons />
                      </li>
                  </ul>
              </li>
          </ul>
        </div>
    );
}