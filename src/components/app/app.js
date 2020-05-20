import React from 'react';
import {BrowserRouter as Router, 
    Route,
} from 'react-router-dom'

import Nav from '../nav/nav';
import Signup from '../signup/signup';
import SignIn from '../signin/signin'
import Home from '../home/home';
import Account from '../account/account';
import Admin from '../admin/admin';
import Rules from '../rules/rules';
import Grid from '../StartGrid/grid';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import Draft from '../Draft/draft';

import * as ROUTES from '../../constants/routes';

 
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