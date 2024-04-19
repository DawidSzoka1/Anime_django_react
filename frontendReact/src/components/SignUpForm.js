import React from "react";
import EmailInput from "./EmailInput";
import PasswordInput from './PasswordInput'
import {Button, Form} from "react-bootstrap";
import axios from "axios";


const handleSubmit = (e) => {
    e.preventDefault()
        fetch("https://api.jikan.moe/v4/anime")
        .then((resp) => resp.json())
        .then((resp)=> console.log(resp.data))
        .catch((err)=> err)
    axios.post('/api/account/sign-up/', {
        email: e.target[0].value,
        password1: e.target[1].value,
        password2: e.target[2].value,
    })
        .then((resp)=> console.log(resp))
        .catch((err) => console.log(err))
}
const SignUpForm  = () =>{

    return(
            <Form onSubmit={handleSubmit}>
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

export default SignUpForm;