import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signup from "./Signup";
import Signin from "./Signin";
import { Routes, Route, Navigate } from "react-router";



export default function Account() {
  return (

    <div id="wd-account-screen">
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="/Kaynbasu/Account/Signin" />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
);}
