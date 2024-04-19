import React from "react";
import EmailInput from "./EmailInput";
import PasswordInput from './PasswordInput'
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import {Navigate} from "react-router-dom";


const handleSubmit = async (e) => {
    if(e.target[1].value === e.target[2].value){
         await axios.post('/api/account/sign-up/', {
        email: e.target[0].value,
        password: e.target[1].value,
    })
        .then((resp)=> console.log(resp))
        .catch((err) => console.log(err))
        return <Navigate to='/'/>
    }
    else{
        console.log("Hasla nie sa takie same")
    }

}
const RegisterForm  = () =>{

    return(
            <Form onSubmit={handleSubmit}>
                <Form.Label>
                    Register
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

export default RegisterForm;