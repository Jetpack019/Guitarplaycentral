import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Home_Guitars() {
  const h1Styles = {
    color: 'white',
    fontSize: '2.5rem',
   
  };
  const h2Styles = {
    color: 'white',
    fontSize: '1.7rem',
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
          <span style={spanStyles}>Acoustic</span> Wonders
        </span>
      ),
      imageSrc: '/images/acoustic.jpg',
    },
    {
      title: (
        <span>
          <span style={spanStyles}>Electric</span> Powerhouses
        </span>
      ),
      imageSrc: '/images/electric.jpg',
    },
    {
      title: (
        <span>
          Versatile <span style={spanStyles}>Bass</span> Guitars
        </span>
      ),
      imageSrc: '/images/bass.jpg',
    },
  ];

  return (
    <div style={{ backgroundColor: 'black', height: '100vh',overflow:'hidden',padding:'0 120px'}}>
      <Col style={{ textAlign: 'center',marginTop:'100px'}}>
        <h1 style={h1Styles}>
          Discover Your <span style={spanStyles}>Perfect</span> Guitar
        </h1>
        <Row style={{ marginTop:'40px'}}>
          {guitarCategories.map((category, index) => (
            <Col key={index}>
              <div style={{  textAlign:'center'}}>
                <img
                  src={category.imageSrc}
                  alt=""
                  style={{
                    width: '250px',
                    height: '250px',
                    borderWidth: '2px',
                    borderColor: 'white',
                    borderStyle: 'solid',
                    borderRadius: '20px',
                  }}
                />
                <h2 style={h2Styles}>{category.title}</h2>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </div>
  );
}

export default Home_Guitars;
