import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class NavbarComp extends React.Component{
    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">MainPage</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/sign-up">Sign up</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        )
    }


}

export default NavbarComp