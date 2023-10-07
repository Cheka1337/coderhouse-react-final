import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {Component} from 'react';
import CartWidget from './CartWidget';
import DropDown from './DropDown';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to='/' >
        <Navbar.Brand href="#">Urban Code</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
         
            
            <DropDown />

            <Nav.Link href="#" disabled>
              Contacto
            </Nav.Link>
                
          </Nav>

          <NavLink><CartWidget /></NavLink>

          <div>
          

          </div>
          <div></div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;