import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

import '../components/customnavbar.css';


function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };

  const linkStyles = {
    color: 'white',
    fontSize: '1.2rem',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    position: 'relative',
  };




  return (
    <Navbar expand="lg" expanded={expanded} style={{ backgroundColor: "#000000", }}>
      <Navbar.Brand as={NavLink} to="/" style={linkStyles}>
       COZY WEARS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavToggle} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link
            as={NavLink}
            exact
            to="/"
            style={linkStyles}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            exact
            to="/tuner"
            style={linkStyles}
          >
           Tuner
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/video"
            style={linkStyles}
          >
            Videos
          </Nav.Link>
        
          <Nav.Link
            as={NavLink}
            to="/products"
            style={linkStyles}
          >
            Products
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/blog"
            style={linkStyles}
          >
            Blog
          </Nav.Link>
        
        </Nav>
      
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
