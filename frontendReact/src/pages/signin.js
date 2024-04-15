import React from "react";
import {InputGroup, Form} from "react-bootstrap";
class SignIn extends React.Component {
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

            </div>
        )
    }


}

export default SignIn;