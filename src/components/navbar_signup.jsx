import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

import '../components/customnavbar.css';


function Navbar_Signup() {
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
      <Navbar.Brand as={NavLink} to="/login" style={linkStyles}>
       <img src="/images/Logo-GuitarPlay.png" alt="" style={{height:'5%',width:'5%',margin:'auto'}}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavToggle} />
     
    </Navbar>
  );
}

export default Navbar_Signup;
