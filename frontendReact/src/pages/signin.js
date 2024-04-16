import React from "react";
import {InputGroup, Form, Button} from "react-bootstrap";


const SignIn = () => {

    return (
        <div>
            <InputGroup className="mt-3">
                <InputGroup.Text id="Email">
                    <Form.Control placeholder="Email"/>
                </InputGroup.Text>
            </InputGroup>
            <InputGroup className="mt-3">
                <InputGroup.Text id="Password">
                    <Form.Control placeholder="Password"/>
                </InputGroup.Text>
            </InputGroup>
            <div className='mt-3'>
                <Button className='m-lg-1' type="submit">Sing in</Button>
                <Button href="/sign-up/">Nie masz jeszcze konta?</Button>
            </div>

        </div>
    )


}

export default SignIn;