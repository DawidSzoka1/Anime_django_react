import React from "react";
import {Form, InputGroup} from "react-bootstrap";


class PasswordInput extends React.Component{
    state={
        password: "",
    }
    handlePasswordChange = e => {
        this.setState({password: e.target.value});
    };


    render() {
        return(
            <InputGroup className="mt-3">
                <InputGroup.Text id="Email" >
                    <Form.Control placeholder="password" type='password' onChange={this.handlePasswordChange}
                                  value={this.state.password}/>
                </InputGroup.Text>
            </InputGroup>
        )
    }


}

export default PasswordInput;