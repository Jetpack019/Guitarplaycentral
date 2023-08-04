import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../components/customnavbar.css';
import { useCart } from '../pages/Products/Cart_Content';


function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
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


  const loginLinkStyles = {
    ...linkStyles,
    border: '2px solid white',
    padding: '5px 10px',
  };

  const cartIconStyles = {
    ...linkStyles,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const cartItemCountStyles = {
    position: 'absolute',
    top: '0',
    right: '0',
    background: 'red',
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
  };



  return (
    <Navbar expand="lg" expanded={expanded} style={{ backgroundColor: "#000000", }}>
      <Navbar.Brand as={NavLink} to="/" style={linkStyles}>
       <img src="/images/Logo-GuitarPlay.png" alt="" style={{height:'7%',width:'7%',margin:'auto'}}/>
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
            Sales
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/blog"
            style={linkStyles}
          >
            Blog
          </Nav.Link>
        
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link
            href="/login"
            style={loginLinkStyles}
          >
            Login
          </Nav.Link>
          <Nav.Link href="/signup" style={linkStyles}>
            Signup
          </Nav.Link>
          <Nav.Link href="/addtocart" style={cartIconStyles}>
      <FaShoppingCart style={{ fontSize: '1.5rem' }} />
      {cartItemCount > 0 && <span style={cartItemCountStyles}>{cartItemCount}</span>}
    </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
