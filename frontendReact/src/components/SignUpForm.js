import React from "react";
import EmailInput from "./EmailInput";
import PasswordInput from './PasswordInput'
import {Button, Form} from "react-bootstrap";


class SignUpForm extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault()

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
                <div className='mt-3'>
                    <Button className='m-lg-1' type="submit">Sing up</Button>
                    <Button href="/sign-in/">Masz juz konot?</Button>
                </div>
            </Form>
        )
    }

}

export default SignUpForm;