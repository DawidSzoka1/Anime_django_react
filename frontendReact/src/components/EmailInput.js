import React from "react";
import {Form, InputGroup} from "react-bootstrap";


class EmailInput extends React.Component{
    state={
        email: "",
    }
    handleEmailChange = e => {
        this.setState({email: e.target.value});
    };


    render() {
        return(
            <InputGroup className="mt-3">
                <InputGroup.Text id="Email" >
                    <Form.Control placeholder="Email" type='email' onChange={this.handleEmailChange} value={this.state.email}/>
                </InputGroup.Text>
            </InputGroup>
        )
    }


}

export default EmailInput;