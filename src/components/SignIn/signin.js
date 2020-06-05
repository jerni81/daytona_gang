import React, {Component} from "react";
import "./signin.css";

import {SignUpLink} from "../SignUp/signup";
import {withFirebase} from "../Firebase";
import * as ROUTES from "../../constants/routes";

const INITIAL_STATE = {
    email: "",
    password: "",
    user: null,
    error: null,
};

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
        event.preventDefault();

        const {email, password} = this.state;
        const {updateUser, history} = this.props;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then((user) => {
                updateUser({user});
                history.push(ROUTES.HOME);
            })
            .catch((error) => {
                updateUser({error});
            });


    };

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {email, password, error} = this.state;

        const isInvalid = password === "" || email === "";

        return (
            <div>
                <h1>SignIn</h1>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                    />
                    <input
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                    />
                    <button disabled={isInvalid} type="submit">
                        Sign In
                    </button>

                    {error && <p>{error.message}</p>}
                </form>
                <SignUpLink/>
            </div>
        );
    }
}

export default withFirebase(SignIn);

