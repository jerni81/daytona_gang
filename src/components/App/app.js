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

import Header from "../Header/header";
import Rules from "../Rules/rules";
import Grid from "../StartGrid/grid";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Draft from "../Draft/draft";

import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
      user: null,
      error: null,
      drivers: [],
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });

    const driversRef = this.props.firebase.database.ref("drivers");
    driversRef.on("value", (snapshot) => {
      let drivers = snapshot.val();

      this.setState({
        drivers: drivers,
      });
      // console.log(this.state.drivers);
    });

    setTimeout(() => {
      if (this.state.authUser != null) {
        const userRef = this.props.firebase.database.ref(
          "users/" + this.state.authUser.uid
        );
        userRef.on("value", (snapshot) => {
          let user = snapshot.val();

          this.setState({
            user: user,
          });
        });
      }
    }, 500);
  }

  componentDidUpdate() {
    console.log("driver log", this.state.drivers);
    if (this.state.authUser != null) {
      console.log(this.state.authUser.uid);
    }
    console.log("User in state", this.state.user);
  }

  componentWillUnmount() {
    this.listener();
  }

  updateUser = ({ user }) => {
    this.setState({ user });
  };

  render() {
    const { authUser } = this.state;

    return (
      <div>
        <Header />
        <Router>
          <div>
            <Nav authUser={authUser} />
            <hr />
            <div>
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
              <Route
                path={ROUTES.DRAFT}
                render={() => (
                  <Draft user={this.state.user} drivers={this.state.drivers} />
                )}
              />
            </div>
            <div>
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route
                path={ROUTES.SIGN_IN}
                render={(props) => (
                  <SignIn {...props} updateUser={this.updateUser} />
                )}
              />
              <Route path={ROUTES.SIGN_UP} component={Signup} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default withFirebase(App);
