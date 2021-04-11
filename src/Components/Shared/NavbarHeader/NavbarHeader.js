import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';


const NavbarHeader = () => {
    return (
        <Navbar expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav  class="ml-5" href="#home">Home</Nav>
            <Nav class="ml-5" >About</Nav>
            <Nav class="ml-5" >Dental Services</Nav>
            <Nav class="ml-5 text-white">Reviews</Nav>
            <Nav class="ml-5 text-white">Blogs</Nav>
            <Nav class="ml-5 text-white">Contact Us</Nav>
            
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>          
    );
};

export default NavbarHeader;