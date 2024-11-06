import { Link, useParams, useLocation } from "react-router-dom";
import coursesData from '../Database/courses.json';

export default function CoursesNavigation() {
  const { cid } = useParams(); 
  const { pathname } = useLocation(); 
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"]; 

  const course = coursesData.find(course => course._id === cid);

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/Kanbas/Courses/${course ? course._id : 'undefined'}/${link}`; 
        const isActive = pathname.includes(link); 

        return (
          <Link 
            key={link} 
            to={linkPath} 
            id={`wd-course-${link.toLowerCase()}-link`} 
            className={`list-group-item border-0 d-flex align-items-center ${isActive ? "text-black" : "text-danger"}`} 
            style={{
              position: "relative", 
              backgroundColor: "white", 
              paddingLeft: "20px", 
              paddingRight: "20px", 
            }}
          >
            {isActive && (
              <div 
                style={{
                  position: "absolute", 
                  left: 0, 
                  width: "5px", 
                  height: "100%", 
                  backgroundColor: "black", 
                  borderRadius: "3px", 
                }} 
              />
            )}
            {link}
          </Link>
        );
      })}
    </div>
  );
}