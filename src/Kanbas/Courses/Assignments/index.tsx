import { FaCheckCircle, FaSearch } from "react-icons/fa"; // Importing search icon
import { IoEllipsisVertical } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi"; // Importing notebook icon

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: '250px' }}>
          <span className="input-group-text bg-white" style={{ padding: '0.3rem 0.5rem' }}>
            <FaSearch className="text-muted" style={{ fontSize: '1.2rem' }} />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search..."
            style={{ borderLeft: 'none' }}
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-outline-secondary me-2">
            + Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            + Assignment
          </button>
        </div>
      </div>


      <div className="border p-3 mb-0 rounded d-flex justify-content-between align-items-center bg-light" style={{ borderLeft: '5px solid green' }}>
        <div className="d-flex align-items-center">
          <IoEllipsisVertical className="fs-4 text-muted me-2" />
          <h3 id="wd-assignments-title" className="mb-0 d-flex align-items-center">
            ASSIGNMENTS
          </h3>
        </div>

        <div className="d-flex align-items-center ms-auto">
          <span className="border rounded px-3 py-2 bg-white text-dark" style={{ borderRadius: '10px' }}>
            40% of Total
          </span>
          <button className="btn btn-sm btn-secondary ms-3">+</button>
          <IoEllipsisVertical className="fs-4 text-muted ms-2" />
        </div>
      </div>


      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-list-item list-group-item p-0 mb-0 fs-5 border-gray" style={{ borderLeft: '5px solid green' }}>
          <div className="wd-title p-3 ps-2 text-dark">
            <IoEllipsisVertical className="fs-4 text-muted me-2" />
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">A1</a>
            <div className="float-end">
              <FaCheckCircle className="me-3 text-success fs-4" style={{ verticalAlign: 'middle' }} />
              <IoEllipsisVertical className="fs-4 text-muted" />
            </div>
          </div>
          <p className="p-3 ps-2 mb-0">
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <GiNotebook className="text-success" style={{ fontSize: '1.2rem', marginRight: '5px' }} />
            </span>
            <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
          </p>
        </li>

        <li className="wd-assignment-list-item list-group-item p-0 mb-0 fs-5 border-gray" style={{ borderLeft: '5px solid green' }}>
          <div className="wd-title p-3 ps-2 text-dark">
            <IoEllipsisVertical className="fs-4 text-muted me-2" />
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/124">A2</a>
            <div className="float-end">
              <FaCheckCircle className="me-3 text-success fs-4" style={{ verticalAlign: 'middle' }} />
              <IoEllipsisVertical className="fs-4 text-muted" />
            </div>
          </div>
          <p className="p-3 ps-2 mb-0">
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <GiNotebook className="text-success" style={{ fontSize: '1.2rem', marginRight: '5px' }} />
            </span>
            <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
          </p>
        </li>

        <li className="wd-assignment-list-item list-group-item p-0 mb-0 fs-5 border-gray" style={{ borderLeft: '5px solid green' }}>
          <div className="wd-title p-3 ps-2 text-dark">
            <IoEllipsisVertical className="fs-4 text-muted me-2" />
            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/125">A3</a>
            <div className="float-end">
              <FaCheckCircle className="me-3 text-success fs-4" style={{ verticalAlign: 'middle' }} />
              <IoEllipsisVertical className="fs-4 text-muted" />
            </div>
          </div>
          <p className="p-3 ps-2 mb-0">
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <GiNotebook className="text-success" style={{ fontSize: '1.2rem', marginRight: '5px' }} />
            </span>
            <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts
          </p>
        </li>
      </ul>
    </div>
  );
}