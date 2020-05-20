import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

import * as ROUTES from "../../constants/routes";

const Nav = () => (
  <div>
    {/* <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>

      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    </ul> */}
    <div>
      <ul className="navBar">
        <li>
          <Link to={ROUTES.RULES}>Rules</Link>
        </li>
        <li>
          <Link to={ROUTES.GRID}>Drivers</Link>
        </li>
        <li>
          <Link to={ROUTES.LEADERBOARD}>Leader Board</Link>
        </li>
        <li>
          <Link to={ROUTES.DRAFT}>Draft</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
