import { FaUserCircle } from "react-icons/fa";
// it didnt work so i hard coded it

export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">3245</span>{" "}
              <span className="wd-last-name">2345</span>
            </td>
            <td className="wd-login-id">52345</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">01/01/2001</td>
            <td className="wd-total-activity">11:11:11</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">1324432</span>{" "}
              <span className="wd-last-name">1234</span>
            </td>
            <td className="wd-login-id">2134</td>
            <td className="wd-section">1234</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">01/01/2001</td>
            <td className="wd-total-activity">11:11:11</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">4325234</span>{" "}
              <span className="wd-last-name">123123</span>
            </td>
            <td className="wd-login-id">2345</td>
            <td className="wd-section">asd</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">01/01/2001</td>
            <td className="wd-total-activity">11:11:11</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">2345</span>{" "}
              <span className="wd-last-name">2345</span>
            </td>
            <td className="wd-login-id">1234</td>
            <td className="wd-section">asd</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-04</td>
            <td className="wd-total-activity">11:11:11</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}