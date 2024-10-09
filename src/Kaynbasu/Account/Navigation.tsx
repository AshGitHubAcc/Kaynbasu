import { Link } from "react-router-dom";


export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link to={`/Kaynbasu/Account/Profile`} > Profile </Link> <br/>
      <Link to={`/Kaynbasu/Account/Signin`}  > Signin  </Link> <br/>
      <Link to={`/Kaynbasu/Account/Signup`}  > Signup  </Link> <br/>
    </div>
);
}
