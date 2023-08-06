import React from 'react'
import { Col, Row } from 'react-bootstrap';
function About_Mission() {
    const h1Styles = {
        color: 'white',
        fontSize: '2rem',
       
      };
      const h2Styles = {
        color: 'white',
        fontSize: '1.3rem',
        textAlign:'center',
        padding:'0 20px'
      };
      const spanStyles = {
        color: '#FFE500',
      };
    
      const missions = [
        {
          title: (
            <span>
              <span style={spanStyles}>Ins</span>pire
            </span>
          ),
          titledesc: 'Our mission is to inspire guitarists worldwide, regardless of their skill level, by offering engaging content and meaningful experiences that ignite passion for music.'
        },
        {
          title: (
            <span>
             Edu<span style={spanStyles}>cate</span>
            </span>
          ),
          titledesc: 'We aim to educate aspiring guitarists with comprehensive lessons, tutorials, and resources, empowering them to grow and develop their skills.'
        },
        {
          title: (
            <span>
              Em<span style={spanStyles}>power</span> Deals
            </span>
          ),
          titledesc: 'GuitarPlay Central seeks to empower guitar enthusiasts by providing a supportive community, top-quality instruments, and a platform to showcase their talents.'
        },
      ];
  return (
    <div style={{ backgroundColor: 'black', height: '100vh',overflow:'hidden',padding:'0 50px'}}>
    <Col style={{ textAlign: 'center',marginTop:'100px'}}>
      <h1 style={{ fontSize: '3rem',color:'white'}}>
        Our <span style={spanStyles}>Mission</span>
      </h1>
      <Row style={{ marginTop:'30px'}}>
        {missions.map((mission, index) => (
          <Col key={index} >
            <div style={{  textAlign:'center'}}>
            <h1 style={h1Styles}>{mission.title}</h1>
              <h2 style={h2Styles}>{mission.titledesc}</h2>
            </div>
          </Col>
        ))}
      </Row>
    </Col>
  </div>
  )
}

export default About_Mission
