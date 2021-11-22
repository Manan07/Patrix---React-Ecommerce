import React from "react";

// Style
import "./sign-in and sign-up.style.css";

// Components
import SignIn from "../Sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
