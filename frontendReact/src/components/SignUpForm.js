import React from "react";
import EmailInput from "./EmailInput";
import PasswordInput from './PasswordInput'
import {Form} from "react-bootstrap";

class SignUpForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {email: '', password1: '', password2: ''}
    }
    handleSubmit(event){
        this.setState({email: event.target.email.value,
            password1: event.target.password1.value,
            password2: event.target.password2.value,
        })
    }
    render() {

        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Label>
                    Sing up
                </Form.Label>
                <EmailInput/>
                <PasswordInput id='password1'/>
                <PasswordInput id='password2'/>
            </Form>
        )
    }

}

export default SignUpForm;