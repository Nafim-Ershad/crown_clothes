import React from "react";

// Component
import FormInput from "../form_input/form_input.component"; 
import CustomButton from "../custom_button/custom_button.component";

//FireBase
import { auth, SignInWithGoogle } from "../../firebase/firebase.utils";

// Styles
import "./sign_in.styles.scss";

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        
        const { email, password } = this.state;

        try{
            auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: "",
                password: ""
            })
        }
        catch(error){
            console.log(error.message);
        }

        
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render(){
        return(
            <div className="sign_in">
                <h2>I Already Have an Account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email}
                    handleChange={this.handleChange} 
                    label="Email"
                    required/>
                    
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label="Password" 
                    required/>
                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign-In
                        </CustomButton>
                        <CustomButton isGoogle={true} onClick={ SignInWithGoogle }>
                            Sign-In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;