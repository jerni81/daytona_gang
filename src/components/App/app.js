import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
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
      authUser: undefined,
      user: undefined,
      error: null,
      drivers: [],
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser }, (authUser) => {
            const userRef = this.props.firebase.database.ref(
              "users/" + this.state.authUser.uid
            );
            userRef.on("value", (snapshot) => {
              let user = snapshot.val();

              this.setState({
                user: user,
              });
            });
          })
        : this.setState({ authUser: null });
    });

    const driversRef = this.props.firebase.database.ref("drivers");
    driversRef.on("value", (snapshot) => {
      let drivers = snapshot.val();

      this.setState({
        drivers: drivers,
      });
    });
  }

  componentDidUpdate() {
    // console.log("driver log", this.state.drivers);
    // if (this.state.authUser != null) {
    //   console.log(this.state.authUser.uid);
    // }
    // console.log("User in state", this.state.user);
  }

  componentWillUnmount() {
    this.listener();
  }

  updateUser = ({ user }) => {
    this.setState({ user });
  };

  render() {
    const { authUser } = this.state;

    if (typeof authUser === "undefined") {
      return <div>This is loading slower then Martin Truex drives!!</div>;
    }

    if (typeof authUser === "null") {
      return (
        <div>
          <Route exact path={ROUTES.HOME} component={Home} />
        </div>
      );
    }

    return (
      <div>
        <Header />

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
              render={(props) => (
                <Draft
                  {...props}
                  user={this.state.user}
                  drivers={this.state.drivers}
                />
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
      </div>
    );
  }
}

export default withFirebase(App);
