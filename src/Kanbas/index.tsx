import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import * as db from "./Database";
import { useState } from "react";
import { enrollments } from "./Database";
import { useSelector } from "react-redux";

export default function Kanbas() {
  const currentUser = useSelector((state: any) => state.currentUser);
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
//   const updateCourse = () => {
//     setCourses(
//       courses.filter((course) =>
//         enrollments.some(
//           (enrollment) =>
//             enrollment.user === currentUser._id &&
//             enrollment.course === course._id
//            ))
//   .map((c) => {
//         if (c._id === course._id) {
//           return course;
//         } else {
//           return c;
//         }
//       })
//     );
//   };

//   return (
//     <div id="wd-kanbas">
//       <KanbasNavigation />
//       <div className="wd-main-content-offset p-3">
//         <Routes>
//           <Route path="/" element={<Navigate to="/Kanbas/Dashboard" />} />
//           <Route path="/Account/*" element={<Account />} />
//           <Route path="/Dashboard" element={ <Dashboard courses={courses}
//               course={course}
//               setCourse={setCourse}
//               addNewCourse={addNewCourse}
//               deleteCourse={deleteCourse}
//               updateCourse={updateCourse}/>
//           } />
//           <Route path="/Courses/:cid/*" element={ <Courses courses={courses} /> } />
//           <Route path="/Calendar" element={<h1>Calendar</h1>} />
//           <Route path="/Inbox" element={<h1>Inbox</h1>} />
//         </Routes>
//       </div>  
//     </div>
//   );
// }
const updateCourse = () => {
  setCourses(
    courses.map((c) => {
      if (c._id === course._id) {
        return course;
      } else {
        return c;
      }
    })
  );
};
return (
  <div id="wd-kanbas">
    <KanbasNavigation />
    <div className="wd-main-content-offset p-3">
      <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="Account" element={<h1>Account</h1>} />
        <Route path="Dashboard" element={
          <Dashboard
            courses={courses}
            course={course}
            setCourse={setCourse}
            addNewCourse={addNewCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}/>
        } />
        <Route path="Courses/:cid/*" element={<Courses courses={courses} />} />
      </Routes>
    </div>
  </div>
  );}