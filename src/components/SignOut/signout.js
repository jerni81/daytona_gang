import React from "react";
import "./signout.css";

import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
