import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> 
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          {/* Course 1 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" width="100%" height={184} alt="React JS" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                  <p className="wd-dashboard-course-title card-text">Full Stack software developer</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 2 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5678/Home">
                <img src="/images/python.jpg" width="100%" height={160} alt="Python" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5678 Python</h5>
                  <p className="wd-dashboard-course-title card-text">Introduction to Python Programming</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 3 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/9101/Home">
                <img src="/images/nodejs.jpg" width="100%" height={160} alt="Node.js" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS9101 Node.js</h5>
                  <p className="wd-dashboard-course-title card-text">Backend Development with Node.js</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 4 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1121/Home">
                <img src="/images/java.jpg" width="100%" height={160} alt="Java" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1121 Java</h5>
                  <p className="wd-dashboard-course-title card-text">Object-Oriented Programming in Java</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 5 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1314/Home">
                <img src="/images/htmlcss.jpg" width="100%" height={160} alt="HTML & CSS" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1314 HTML & CSS</h5>
                  <p className="wd-dashboard-course-title card-text">Web Design and Development</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 6 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1516/Home">
                <img src="/images/django.jpg" width="100%" height={160} alt="Django" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1516 Django</h5>
                  <p className="wd-dashboard-course-title card-text">Building Web Apps with Django</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 7 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1718/Home">
                <img src="/images/angular.jpg" width="100%" height={160} alt="Angular" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1718 Angular</h5>
                  <p className="wd-dashboard-course-title card-text">Frontend Frameworks with Angular</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}