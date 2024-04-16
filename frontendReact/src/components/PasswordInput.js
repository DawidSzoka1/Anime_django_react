import React, {useState} from "react";
import {Form, InputGroup} from "react-bootstrap";


const PasswordInput = () => {
    const [password, setPassword] = useState('')


    return (
        <InputGroup className="mt-3">
            <InputGroup.Text id="Email">
                <Form.Control placeholder="password" type='password'
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}/>
            </InputGroup.Text>
        </InputGroup>
    )

}

export default PasswordInput;