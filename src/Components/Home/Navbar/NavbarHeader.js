import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';


const NavbarHeader = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Dental Services</Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <Nav.Link href="#link">Blogs</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>          
    );
};

export default NavbarHeader;