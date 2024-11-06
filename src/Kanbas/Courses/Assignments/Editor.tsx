import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Course Name</li>
        </ol>
      </nav>

 
      <div className="form-group">
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label>
        <input
          id="wd-name"
          value="A1"
          className="form-control"
          style={{
            marginBottom: '20px',
          }}
        />
      </div>


      <div
        id="wd-description"
        className="form-control"
        style={{
          minHeight: '200px',
          marginBottom: '20px',
        }}
      >
        <p>The assignment is available online</p>
        <p>Submit a link to the landing page of your Web application running on Netlify.</p>
        <p>The landing page should include the following:</p>
        <ul>
          <li>Your full name and section</li>
          <li>Links to each of the lab assignments</li>
          <li>Link to the Kanbas application</li>
          <li>Links to all relevant source code repositories</li>
        </ul>
        <p>The Kanbas application should include a link to navigate back to the landing page.</p>
      </div>


      <div className="row mb-4">
        <div className="col-md-3 d-flex align-items-center">
          <label htmlFor="wd-points" className="me-2">Points</label>
        </div>
        <div className="col-md-9">
          <select id="wd-points" className="form-control">
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-3 d-flex align-items-center">
          <label htmlFor="wd-group" className="me-2">Assignment Group</label>
        </div>
        <div className="col-md-9">
          <select id="wd-group" className="form-control">
            <option>ASSIGNMENTS</option>
          </select>
        </div>
      </div>


      <div className="row mb-4">
        <div className="col-md-3 d-flex align-items-center">
          <label htmlFor="wd-display-grade-as" className="me-2">Display Grade as</label>
        </div>
        <div className="col-md-9">
          <select id="wd-display-grade-as" className="form-control">
            <option>Percentage</option>
          </select>
        </div>
      </div>


      <div className="row mb-4">
        <div className="col-md-3 d-flex align-items-center">
          <label htmlFor="wd-submission-type" className="me-2">Submission Type</label>
        </div>
        <div className="col-md-9">
          <div className="form-group border p-3 rounded">
            <select id="wd-submission-type" className="form-control mb-3">
              <option>Online</option>
            </select>


            <strong>Online Entry Options</strong>
            <div className="form-check">
              <input type="checkbox" id="wd-text-entry" className="form-check-input" />
              <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-website-url" className="form-check-input" />
              <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
              <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
              <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="wd-file-upload" className="form-check-input" />
              <label htmlFor="wd-file-upload" className="form-check-label">File Upload</label>
            </div>
          </div>
        </div>
      </div>


      <div className="row mb-4">
        <div className="col-md-3 d-flex align-items-center">
          <label>Assign</label>
        </div>
        <div className="col-md-9">
          <div className="form-group border p-3 rounded">
            <label htmlFor="wd-assign-to"><strong>Assign to</strong></label>
            <select id="wd-assign-to" className="form-control mb-3">
              <option>Everyone</option>
            </select>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="wd-due-date"><strong>Due</strong></label>
                <input type="date" id="wd-due-date" defaultValue="2024-05-13" className="form-control" />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="wd-available-from"><strong>Available from</strong></label>
                <input type="date" id="wd-available-from" defaultValue="2024-05-06" className="form-control" />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="wd-available-until"><strong>Until</strong></label>
                <input type="date" id="wd-available-until" defaultValue="2024-05-20" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <hr />

      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button> 
      </div>

    </div>
  );
}