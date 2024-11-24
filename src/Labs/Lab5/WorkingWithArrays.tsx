import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithArrays() {
  const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;
  const ASSIGNMENTS_API = `${REMOTE_SERVER}/lab5/assignments`;

  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const [assignment, setAssignment] = useState({
    id: "1",
    title: "React Assignment",
    description: "Create React Components",
    completed: false,
  });

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      
      {/* Todos Section */}
      <div className="mb-4">
        <h4>Todo Operations</h4>
        
        <div className="mb-3">
          <h5>Retrieving Todos</h5>
          <a id="wd-retrieve-todos" className="btn btn-primary me-2" href={TODOS_API}>
            Get All Todos
          </a>
          <a id="wd-retrieve-completed-todos" className="btn btn-primary" 
             href={`${TODOS_API}?completed=true`}>
            Get Completed Todos
          </a>
        </div>

        <div className="mb-3">
          <h5>Get Todo by ID</h5>
          <input
            id="wd-todo-id"
            value={todo.id}
            className="form-control w-50 mb-2"
            onChange={(e) => setTodo({ ...todo, id: e.target.value })}
          />
          <a
            id="wd-retrieve-todo-by-id"
            className="btn btn-primary"
            href={`${TODOS_API}/${todo.id}`}
          >
            Get Todo by ID
          </a>
        </div>

        <div className="mb-3">
          <h5>Create New Todo</h5>
          <a
            id="wd-create-todo"
            className="btn btn-success"
            href={`${TODOS_API}/create`}
          >
            Create Todo
          </a>
        </div>

        <div className="mb-3">
          <h5>Delete Todo</h5>
          <input
            value={todo.id}
            className="form-control w-50 mb-2"
            onChange={(e) => setTodo({ ...todo, id: e.target.value })}
          />
          <a
            className="btn btn-danger"
            href={`${TODOS_API}/${todo.id}/delete`}
          >
            Delete Todo
          </a>
        </div>

        <div className="mb-3">
          <h5>Update Todo</h5>
          <div className="row">
            <div className="col">
              <input
                placeholder="ID"
                value={todo.id}
                className="form-control mb-2"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}
              />
            </div>
            <div className="col">
              <input
                placeholder="Title"
                value={todo.title}
                className="form-control mb-2"
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              />
            </div>
          </div>
          <a
            className="btn btn-primary"
            href={`${TODOS_API}/${todo.id}/title/${todo.title}`}
          >
            Update Todo
          </a>
        </div>
      </div>

      {/* Assignments Section */}
      <div className="mb-4">
        <h4>Assignment Operations</h4>
        
        <div className="mb-3">
          <h5>Retrieving Assignments</h5>
          <a className="btn btn-primary me-2" href={ASSIGNMENTS_API}>
            Get All Assignments
          </a>
          <a className="btn btn-primary" href={`${ASSIGNMENTS_API}?completed=true`}>
            Get Completed Assignments
          </a>
        </div>

        <div className="mb-3">
          <h5>Get Assignment by ID</h5>
          <input
            value={assignment.id}
            className="form-control w-50 mb-2"
            onChange={(e) => setAssignment({ ...assignment, id: e.target.value })}
          />
          <a
            className="btn btn-primary"
            href={`${ASSIGNMENTS_API}/${assignment.id}`}
          >
            Get Assignment by ID
          </a>
        </div>

        <div className="mb-3">
          <h5>Create New Assignment</h5>
          <a
            className="btn btn-success"
            href={`${ASSIGNMENTS_API}/create`}
          >
            Create Assignment
          </a>
        </div>

        <div className="mb-3">
          <h5>Update Assignment</h5>
          <div className="row">
            <div className="col">
              <input
                placeholder="Title"
                value={assignment.title}
                className="form-control mb-2"
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
              />
            </div>
            <div className="col">
              <input
                placeholder="Description"
                value={assignment.description}
                className="form-control mb-2"
                onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
              />
            </div>
          </div>
          <div className="mb-2">
            <label className="me-2">
              Completed:
              <input
                type="checkbox"
                className="ms-2"
                checked={assignment.completed}
                onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
              />
            </label>
          </div>
          <div className="btn-group">
            <a
              className="btn btn-primary"
              href={`${ASSIGNMENTS_API}/${assignment.id}/title/${assignment.title}`}
            >
              Update Title
            </a>
            <a
              className="btn btn-primary"
              href={`${ASSIGNMENTS_API}/${assignment.id}/description/${assignment.description}`}
            >
              Update Description
            </a>
            <a
              className="btn btn-primary"
              href={`${ASSIGNMENTS_API}/${assignment.id}/completed/${assignment.completed}`}
            >
              Update Status
            </a>
          </div>
        </div>

        <div className="mb-3">
          <h5>Delete Assignment</h5>
          <input
            value={assignment.id}
            className="form-control w-50 mb-2"
            onChange={(e) => setAssignment({ ...assignment, id: e.target.value })}
          />
          <a
            className="btn btn-danger"
            href={`${ASSIGNMENTS_API}/${assignment.id}/delete`}
          >
            Delete Assignment
          </a>
        </div>
      </div>
    </div>
  );
}