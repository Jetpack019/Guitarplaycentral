import React from 'react'
import { Col, Row } from 'react-bootstrap';
function Home_Deals() {
    const h1Styles = {
        color: 'white',
        fontSize: '2rem',
       
      };
      const h2Styles = {
        color: 'white',
        fontSize: '1.3rem',
        textAlign:'center',
        padding:'0 100px'
      };
      const spanStyles = {
        color: '#FFE500',
      };
    
      const guitarCategories = [
        {
          title: (
            <span>
              <span style={spanStyles}>Limited-Time</span> Offers
            </span>
          ),
          titledesc: 'Discover exclusive limited-time deals on guitars, amplifiers, and accessories.'
        },
        {
          title: (
            <span>
             Clearance  <span style={spanStyles}>Sale</span>
            </span>
          ),
          titledesc: 'Explore our clearance sale section featuring discounted guitars and equipment.'
        },
        {
          title: (
            <span>
              <span style={spanStyles}>Bundle </span> Deals
            </span>
          ),
          titledesc: 'Unlock amazing value with our bundle deals that combine guitars with essential accessories.'
        },
      ];
  return (
    <div style={{ backgroundColor: 'black', height: '100vh',overflow:'hidden',padding:'0 50px'}}>
    <Col style={{ textAlign: 'center',marginTop:'100px'}}>
      <h1 style={h1Styles}>
        Discover Your <span style={spanStyles}>Perfect</span> Guitar
      </h1>
      <Row style={{ marginTop:'30px'}}>
        {guitarCategories.map((category, index) => (
          <Col key={index} >
            <div style={{  textAlign:'center'}}>
            <h1 style={h1Styles}>{category.title}</h1>
              <h2 style={h2Styles}>{category.titledesc}</h2>
            </div>
          </Col>
        ))}
      </Row>
    </Col>
  </div>
  )
}

export default Home_Deals
