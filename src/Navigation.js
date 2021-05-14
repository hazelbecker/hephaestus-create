import React from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
        <>
            <Navbar className="nav-bar-container" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Hephaestus</Navbar.Brand>
                    <a className="gitLink" href='https://github.com/Abielf/Haphaestus-frontend'>github link</a>
                    <Nav className="mr-auto">
                        <Nav.Link href="/posts">Home </Nav.Link>
                        <Nav.Link href="/posts/{id}"> Create Post</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;