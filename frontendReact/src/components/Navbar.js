import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProtectedRoute from "./ProtectedRoute";


const NavbarComp = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">MainPage</Navbar.Brand>
                <ProtectedRoute logged={false}>
                    <Nav className="me-auto">
                        <Nav.Link href="/register/">Sign up</Nav.Link>
                        <Nav.Link href="/login/">Sign in</Nav.Link>
                    </Nav>
                </ProtectedRoute>
            </Container>
        </Navbar>
    )
}

export default NavbarComp