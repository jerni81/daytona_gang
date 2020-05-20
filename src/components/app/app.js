import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";

import Nav from "../Nav/nav";
import Signup from "../SignUp/signup";
import SignIn from "../SignIn/signin";
import Home from "../Home/home";
import Account from "../Account/account";
import Admin from "../Admin/admin";
import Rules from "../Rules/rules";
import Grid from "../StartGrid/grid";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Draft from "../Draft/draft";

import * as ROUTES from "../../constants/routes";

const App = () => (
  <div>
    <h1>Daytona Gang Race Pool!!!</h1>
    <Router>
      <div>
        <Nav />
        <hr />
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SIGN_UP} component={Signup} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.ACCOUNT} component={Account} />
        <Route path={ROUTES.ADMIN} component={Admin} />

        <Route path={ROUTES.RULES} component={Rules} />
        <Route path={ROUTES.LEADERBOARD} component={LeaderBoard} />
        <Route path={ROUTES.GRID} component={Grid} />
        <Route path={ROUTES.DRAFT} component={Draft} />
      </div>
    </Router>
  </div>
);

export default App;
