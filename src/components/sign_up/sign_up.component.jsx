import React from "react";

// Fire Base stuffs for authentications and database
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

// Components
import FormInput from "../form_input/form_input.component";
import CustomButton from "../custom_button/custom_button.component";

// Styles
import "./sign_up.styles.scss";

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) =>{
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    handleSubmit = async (event) =>{
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords Don't Match");
            return ;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })  // This will clear our form

        }catch(error){
            console.log( error.message );
        }

    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign_up">
                <h2 className="title">I do not have an account</h2>
                <span className="subtitle">Sign-Up with E-mail</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required/>

                    <FormInput 
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required/>

                    <FormInput 
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required/>

                    <FormInput 
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required/>

                    <CustomButton type="submit">SIGN-UP</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;