import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";

import Nav from "../Nav/nav";
import Signup from "../SignUp/signup";
import SignIn from "../SignIn/signin";
import SignOut from "../SignOut/signout";
import Home from "../Home/home";
import Landing from "../Landing/landing";
import PassChange from "../PasswordChange/passwordchange";
import PassForget from "../PasswordForget/passwordforget";
import Account from "../Account/account";
import Admin from "../Admin/admin";

import Rules from "../Rules/rules";
import Grid from "../StartGrid/grid";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Draft from "../Draft/draft";

import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";
import firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
      drivers: [],
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });

    const driversRef = firebase.database().ref("drivers");
    driversRef.on("value", (snapshot) => {
      let drivers = snapshot.val();

      this.setState({
        drivers: drivers,
      });
      console.log(this.state.drivers);
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    const authUser = this.state.authUser;

    return (
      <div>
        <h1>Daytona Gang Race Pool!!!</h1>
        <Router>
          <div>
            <Nav authUser={this.state.authUser} />
            <hr />
            <div className={authUser ? "show" : "noShow"}>
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route path={ROUTES.LANDING} component={Landing} />
              <Route path={ROUTES.SIGN_OUT} component={SignOut} />
              <Route path={ROUTES.PASS_CHANGE} component={PassChange} />
              <Route path={ROUTES.PASS_FORGET} component={PassForget} />
              <Route path={ROUTES.ACCOUNT} component={Account} />
              <Route path={ROUTES.ADMIN} component={Admin} />

              <Route path={ROUTES.RULES} component={Rules} />
              <Route path={ROUTES.LEADERBOARD} component={LeaderBoard} />
              <Route
                path={ROUTES.GRID}
                render={() => <Grid drivers={this.state.drivers} />}
              />
              <Route path={ROUTES.DRAFT} component={Draft} />
            </div>
            <div className={authUser ? "noShow" : "show"}>
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route path={ROUTES.SIGN_IN} component={SignIn} />
              <Route path={ROUTES.SIGN_UP} component={Signup} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default withFirebase(App);
