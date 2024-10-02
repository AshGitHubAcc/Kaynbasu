import { Link } from "react-router-dom";
export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" rel="noreferrer">Northeastern</a><br/>
      <Link to="/Kaynbasu/Account" id="wd-account-link">Account</Link><br/>
      <Link to="/Kaynbasu/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
      <Link to="/Kaynbasu/Dashboard" id="wd-course-link">Courses</Link><br/>
      <Link to="/Kaynbasu/Calendar" id="wd-calendar-link">Calendar</Link><br/>
      <Link to="/Kaynbasu/Inbox" id="wd-inbox-link">Inbox</Link><br/>
      <Link to="/Labs" id="wd-labs-link">Labs</Link><br/>
    </div>
);}
