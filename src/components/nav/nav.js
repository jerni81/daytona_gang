import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SignOutButton from '../SignOut/signout';
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
      <SignOutButton/>
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
  // <div>
  //   <Nav fill variant="tabs" defaultActiveKey="/home">
  //     <Nav.Item>
  //       <Nav.Link href="/home">
  //         <Link to={ROUTES.RULES}>Rules</Link>
  //       </Nav.Link>
  //     </Nav.Item>
  //     <Nav.Item>
  //       <Nav.Link eventKey="link-1">
  //       <Link to={ROUTES.GRID}>Drivers</Link>
  //       </Nav.Link>
  //     </Nav.Item>
  //     <Nav.Item>
  //       <Nav.Link eventKey="link-2">
  //         <Link to={ROUTES.LEADERBOARD}>Leader Board</Link>
  //       </Nav.Link>
  //     </Nav.Item>
  //     <Nav.Item>
  //       <Nav.Link eventKey="disabled" disabled>
  //         <Link to={ROUTES.DRAFT}>Draft</Link>
  //       </Nav.Link>
  //     </Nav.Item>
  //    </Nav>
  // </div>
);

export default Nav;
