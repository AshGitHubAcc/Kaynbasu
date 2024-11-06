import { Link } from "react-router-dom";
export default function CoursesNavigation() {
  return (
    <div className="rounded-0 list-group wd" id="wd-courses-navigation">
      <Link
        className="bg-white text-black border-0 active list-group-item"
        to="/Kanbas/Courses/1234/Home"
      >
        Home
      </Link>
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/Modules"
      >
        Modules
      </Link>
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/Piazza"
      >
        Piazza
      </Link>
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/Zoom"
      >
        Zoom
      </Link>
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/Assignments"
      >
        Assignments
      </Link>
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/Quizzes"
      >
        Quizzes
      </Link>
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/Grades"
      >
        Grades
      </Link>
      <Link
        className="text-danger border-0 list-group-item"
        to="/Kanbas/Courses/1234/People"
      >
        People
      </Link>
    </div>
  );
}
