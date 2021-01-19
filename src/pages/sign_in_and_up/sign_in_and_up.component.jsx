import React from "react";

// Component
import SignIn from "../../components/sign_in/sign_in.component";
import SignUp from "../../components/sign_up/sign_up.component";

// Styles
import "./sign_in_and_up.styles.scss";

const SignInAndUp = () => (
    <div className="sign_in_and_up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndUp;