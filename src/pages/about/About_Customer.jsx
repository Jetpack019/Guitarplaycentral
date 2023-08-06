import React from 'react';
import { Col, Row } from 'react-bootstrap';

const h1Styles = {
  color: 'white',
  fontSize: '2.5rem',
  paddingRight: '150px',
};

const spanStyles = {
  color: '#FFE500',
};

const pstyles = {
  color: 'white',
  fontSize: '1.2rem',
  FontFace: 'Montserrat',
  marginTop: '20px',
  paddingRight: '80px',
};

function About_Customer() {
  const sections = [
    {
        title: (
            <span>
              <span style={spanStyles}>Seamless </span>Shopping
            </span>
          ),
      image: '/images/Guitar.png',
      content: `We are committed to providing a smooth and enjoyable shopping experience, ensuring you find the perfect instrument and accessories.Experience a shopping journey that's both smooth and enjoyable, where finding the perfect instrument and accessories becomes effortless.`,
    },
    {
        title: (
            <span>
              <span style={spanStyles}>Excellent </span>Support
            </span>
          ),
      image: '/images/Guitar.png',
      content: `Our dedicated customer support team is always ready to assist with any inquiries, ensuring your complete satisfaction with our products and services. Feel confident knowing that help is just a message or call away!`,
    },
    {
        title: (
            <span>
              <span style={spanStyles}>Feedback </span>and Improvement
            </span>
          ),
      image: '/images/Guitar.png',
      content: `We value your feedback and continuously strive to improve our offerings, ensuring that we meet and exceed your expectations.Your valuable feedback drives us to continuously enhance our offerings, exceeding expectations and fostering a relationship built on trust and excellence.`,
    },

  ];

  return (
    <div style={{ backgroundColor: 'black', padding:'100px 0' }}>
      <div style={{ border: '2px solid white', borderColor: 'white',borderRadius:'50px', margin: '0 40px', backgroundColor: 'black' }}>
        <h1 style={{ position: 'relative', top: '-30px', backgroundColor: '#FFE500', margin: '0 200px', textAlign: 'center' ,color:'black',borderRadius:'20px'}}>Customer Satisfaction</h1>
        {sections.map((section, index) => (
          <div key={index} style={{ backgroundColor: 'black', overflow: 'hidden', padding: '0 80px' ,borderBottomLeftRadius:'50px',borderBottomRightRadius:'50px'}}>
            <Row style={{ marginTop: '20px' }}>
              {index % 2 === 0 ? (
                <>
                  <Col>
                    <div style={{ height: '100%', textAlign: 'center' }}>
                      <div style={{ padding: '40px' }}>
                        <img src={section.image} alt="" style={{ width: '250px', height: '250px' }} />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div style={{ height: '100%' }}>
                      <div style={{ padding: '20px' }}>
                        <h1 style={h1Styles}>
                        {section.title}
                        </h1>
                        <p style={pstyles}>{section.content}</p>
                      </div>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col>
                    <div style={{ height: '100%' }}>
                      <div style={{ padding: '20px' }}>
                        <h1 style={h1Styles}>
                        {section.title}
                        </h1>
                        <p style={pstyles}>{section.content}</p>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div style={{ height: '100%', textAlign: 'center' }}>
                      <div style={{ padding: '40px' }}>
                        <img src={section.image} alt="" style={{ width: '250px', height: '250px' }} />
                      </div>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About_Customer;
