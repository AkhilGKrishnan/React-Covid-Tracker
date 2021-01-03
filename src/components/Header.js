import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">Covid-19 Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/india">India</Link>
            <Link className="nav-link" to="/world">World</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    )}
}

export default Header;
