import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";

import Signin from "./Account/Signin";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";



export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
          <Route path="/Calendar" element={<h2>Calendar</h2>} />
          <Route path="/Inbox" element={<h2>Inbox</h2>} />
        </Routes>
      </div>
    </div>
  );
}
