import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

 
const Nav = () => (
  <div>
    <h1>Nav</h1>
    <ul>
      {/* <li>
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
      </li> */}
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
 
export default Nav;