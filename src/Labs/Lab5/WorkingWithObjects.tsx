import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "CS5610",
    name: "Web Development",
    description: "Learn full stack web development",
    course: "CS Graduate",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      
      {/* Assignment Section */}
      <h4>Assignment</h4>
      <h5>Modifying Properties</h5>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />

      <div className="mt-3">
        <label>Score:</label>
        <input
          type="number"
          className="form-control w-75"
          value={assignment.score}
          onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value) })}
        />
        <a
          className="btn btn-primary mt-2"
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
        >
          Update Score
        </a>
      </div>

      <div className="mt-3">
        <label>
          Completed:
          <input
            type="checkbox"
            className="ms-2"
            checked={assignment.completed}
            onChange={(e) =>
              setAssignment({ ...assignment, completed: e.target.checked })}
          />
        </label>
        <a
          className="btn btn-primary ms-2"
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
        >
          Update Completed Status
        </a>
      </div>

      <hr />

      {/* Module Section */}
      <h4>Module</h4>
      <div className="mb-3">
        <a
          id="wd-retrieve-module"
          className="btn btn-primary me-2"
          href={`${MODULE_API_URL}`}
        >
          Get Module
        </a>
        <a
          id="wd-retrieve-module-name"
          className="btn btn-primary"
          href={`${MODULE_API_URL}/name`}
        >
          Get Module Name
        </a>
      </div>

      <div className="mt-3">
        <label>Module Name:</label>
        <input
          className="form-control w-75"
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
        />
        <a
          className="btn btn-primary mt-2"
          href={`${MODULE_API_URL}/name/${module.name}`}
        >
          Update Module Name
        </a>
      </div>

      <div className="mt-3">
        <label>Module Description:</label>
        <input
          className="form-control w-75"
          value={module.description}
          onChange={(e) => setModule({ ...module, description: e.target.value })}
        />
        <a
          className="btn btn-primary mt-2"
          href={`${MODULE_API_URL}/description/${module.description}`}
        >
          Update Module Description
        </a>
      </div>

      <hr />

      {/* Original Assignment Section */}
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <hr />
    </div>
  );
}