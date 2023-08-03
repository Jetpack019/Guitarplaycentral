import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaPaperPlane } from 'react-icons/fa';

function Footer() {
  const iconStyle = {
    fontSize: '38px',
    margin: '10px',
    borderRadius: '50%',
    backgroundColor: 'white',
    padding: '10px',
  };

  const footerStyle = {
    backgroundColor: 'black',
    padding: '40px 50px',
    overflow:'hidden'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginRight: '10px',
    display: 'flex',
    flexDirection:'column',
    transition: 'color 0.3s ease',
  };
  const linkStyleIcon = {
    color: 'black',
    textDecoration: 'none',
    marginRight: '10px',
    display: 'inline-block',
    transition: 'color 0.3s ease',
    fontSize:'12px'
  };

  const spanStyles = {
    color: '#FFE500',
  };

  const textWhiteStyle = {
    color: 'white',
    cursor: 'pointer',
    fontSize:'18px'
    
  };

  const subscribeBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #ccc',
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor:'white'
  };

  const subscribeButtonStyle = {
    backgroundColor:'white',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    padding: '3px 20px', // Adjusted padding here
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const handleSubscribeClick = () => {
    // Add your subscribe logic here
    alert('You have subscribed!');
  };

  return (
    <div style={footerStyle}>
      <Row>
        <Col>
          <h1 style={{color:'white'}}> <span style={spanStyles}>GuitarPlay </span> Central</h1>
          <p style={{color:'white'}}>Copyright © 2023 GuitarPlay Central</p>
          <p style={{color:'white'}}>All rights reserved</p>
          <a href="#" style={linkStyleIcon}>
            <FaInstagram style={iconStyle} />
          </a>
          <a href="#" style={linkStyleIcon}>
            <FaFacebook style={iconStyle} />
          </a>
          <a href="#" style={linkStyleIcon}>
            <FaTwitter style={iconStyle} />
          </a>
          <a href="#" style={linkStyleIcon}>
            <FaYoutube style={iconStyle} />
          </a>
        </Col>
        <Col>
          <h4 style={{color:'white'}}><span style={spanStyles}>Company</span> </h4>
          <a style={{ ...textWhiteStyle, ...linkStyle }}  >Blog</a>
          <a style={{ ...textWhiteStyle, ...linkStyle }} >Videos</a>
          <a style={{ ...textWhiteStyle, ...linkStyle }}  >Sales</a>
          <a style={{ ...textWhiteStyle, ...linkStyle }}  >Contact Us</a>
          <a style={{ ...textWhiteStyle, ...linkStyle }}  >Testimonials</a>
        </Col>
        <Col>
          <a  style={{ ...textWhiteStyle, ...linkStyle }}  >Legal policy</a>
          <a style={{ ...textWhiteStyle, ...linkStyle }}  >Status policy</a>
          <a style={{ ...textWhiteStyle, ...linkStyle }}  >Privacy policy</a>
          <a style={{ ...textWhiteStyle, ...linkStyle }}  >Terms of service</a>
        </Col>
        <Col>
          <h2 style={{color:'white'}}><span style={spanStyles}>Subs</span>cribe</h2>
          <div style={subscribeBoxStyle}>
            <input type="text" placeholder="Your email" style={{borderWidth:'0'}}/>
            <button style={subscribeButtonStyle} onClick={handleSubscribeClick}>
              <FaPaperPlane style={{ marginRight: '5px' }} />
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
