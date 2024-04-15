import React from "react";
import {InputGroup, Form, Button} from "react-bootstrap";

class SignUp extends React.Component{

    render() {
        return (
            <div>
                <InputGroup className="mt-3">
                    <InputGroup.Text id="Email">
                        <Form.Control placeholder="Email" />
                    </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mt-3">
                    <InputGroup.Text id="Password">
                        <Form.Control placeholder="Password" />
                    </InputGroup.Text>
                </InputGroup>
                <InputGroup className="mt-3">
                    <InputGroup.Text id="Password2">
                        <Form.Control placeholder="Password2" />
                    </InputGroup.Text>
                </InputGroup>
                <div className='mt-3'>
                    <Button className='m-lg-1' type="submit">Sing up</Button>
                    <Button href="/sign-in/">Masz juz konot?</Button>
                </div>
            </div>
        )
    }

}
export default SignUp;