import React from 'react'
import { Col, Row } from 'react-bootstrap';

function About_hero() {
  const h1Styles = {
    color: 'white',
    fontSize: '2.5rem',
    paddingRight:'150px',

  };

  const spanStyles = {
    color: '#FFE500',
  };

  const pstyles = {
    color: 'white',
    fontSize: '1.2rem',
    FontFace: 'Montserrat',
    marginTop:'20px',
    paddingRight:'80px'
  };
  const bottompstyles = {
    color: 'white',
    fontSize: '1.2rem',
    FontFace: 'Montserrat',
    marginTop:'20px',
   textAlign:'center',

  };
  return (
    <div style={{ backgroundColor: 'black', height: '100vh',overflow:'hidden',padding:'0 80px'}}>
        <Row  style={{marginTop:'100px'}}> 
            <Col>
            <div style={{height:'100%'}}>
                <div style={{padding:'20px'}} >
                <h1 style={h1Styles}>
                <span style={spanStyles}> Wel</span>come to <span style={spanStyles}> GuitarPlay</span> Central
                </h1>
                <p style={pstyles}>
                Your ultimate destination for everything guitar-related! We are passionate about music and dedicated to serving the global guitar community with top-notch resources and support. Here, we take pride in providing a comprehensive platform that caters to guitar enthusiasts of all levels.
                </p>
            
                </div>
            </div>
            </Col>
            <Col>
            <div style={{height:'100%' , textAlign:'center'}}>
                <div style={{padding:'40px'}} >
               
                    <img src="/images/Guitar.png" alt=""   style={{
                    width: '250px',
                    height: '250px',
                 
                  }} />
       
                </div>
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default About_hero
