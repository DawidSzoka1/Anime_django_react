import React, {useState} from "react";
import {Form, InputGroup} from "react-bootstrap";


const EmailInput = () => {
    const [email, setEmail] = useState('');

    return (
        <InputGroup className="mt-3">
            <InputGroup.Text id="Email">
                <Form.Control placeholder="Email" type='email'
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}/>
            </InputGroup.Text>
        </InputGroup>
    )
}

export default EmailInput;