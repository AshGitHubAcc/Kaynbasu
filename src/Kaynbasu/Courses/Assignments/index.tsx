export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kaynbasu/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <br>
            </br>
            Multiple Modules | Not Available until May 6 at 12:00 am | <br></br>
            Due May 13 at 11:50 pm | 100pts
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kaynbasu/Courses/1234/Assignments/124">
              A1 - CSS + BOOTSTRAP
            </a>
            <br>
            </br>
            Multiple Modules | Not Available until May 6 at 12:00 am | <br></br>
            Due May 13 at 11:50 pm | 100pts
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kaynbasu/Courses/1234/Assignments/125">
              A2 - Javascript + REACT
            </a>
            <br>
            </br>
            Multiple Modules | Not Available until May 6 at 12:00 am | <br></br>
            Due May 13 at 11:50 pm | 100pts
          </li>
        </ul>
      </div>
  );}
  