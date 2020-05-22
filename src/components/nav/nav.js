import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SignOutButton from '../SignOut/signout';
import * as ROUTES from "../../constants/routes";

const Nav = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
<div>
  <div className="signout">
    <SignOutButton />
  </div>
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
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Nav;
