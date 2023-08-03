import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Home_Playground() {

    const sliderData = [
        {
          imageSrc: '/images/Guitar.png',
          title: 'Guitar Lessons',
        },
        {
          imageSrc: '/images/Guitar.png',
          title: 'Guitar Tutorials',
        },
        {
          imageSrc: '/images/Guitar.png',
          title: 'Master Your Skills',
        },
      ];
    
    const h1Styles = {
        color: 'white',
        fontSize: '3.5rem',
        paddingRight:'150px',
 
      };
    
      const spanStyles = {
        color: '#FFE500',
      };
    
      const pstyles = {
        color: 'white',
        fontSize: '1.4rem',
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
      
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', overflow: 'hidden', padding: '0 60px' }}>
      <Row style={{ marginTop: '100px' }}>
        <Col xs={12} md={6}>
          <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false}>
            {sliderData.map((item, index) => (
              <div key={index} style={{ padding: '40px' }}>
                <img
                  src={item.imageSrc}
                  alt=""
                  style={{
                    width: '250px',
                    height: '250px',
                  }}
                />
                <h1 style={bottompstyles}>
                  <span style={spanStyles}>{item.title}</span>
                </h1>
              </div>
            ))}
          </Carousel>
        </Col>
        <Col xs={12} md={6}>
          <div style={{ height: '100%' }}>
            <div style={{ padding: '40px' }}>
              <h1 style={h1Styles}>
                Your <span style={spanStyles}>One Stop</span> Guitar <span style={spanStyles}>Playground</span>
              </h1>
              <p style={pstyles}>
              Unlock your full musical potential with everything guitar-related, from learning and performing to finding the perfect gear, all in one place at Your One Stop Guitar Playground
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Home_Playground
