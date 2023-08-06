import React from 'react'
import { Col, NavItem, Row } from 'react-bootstrap'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function About_Videos() {
    
  
    
      const h1Styles = {
        color: 'white',
        fontSize: '2.5rem',
      };
    
      const spanStyles = {
        color: '#FFE500',
      };
    
      const pstyles = {
        color: 'white',
        fontSize: '1.4rem',
        FontFace: 'Montserrat',
        marginTop:'20px',

      };
    
      const sliderData = [
        {
          imageSrc: '/images/hand-on-the-neck-of-a-guitar-in-a-g-chord.jpg',
          title: (
            <span>
              <span style={spanStyles}>Fundamental</span>Techniques
            </span>
          ),
          titledesc: 'Explore foundational techniques, such as chord progressions, scales, and fingerpicking, to lay a solid groundwork for your guitar journey.'
        },
        {
          imageSrc: '/images/hand-on-the-neck-of-a-guitar-in-a-g-chord.jpg',
          title: (
            <span>
              <span style={spanStyles}>Advanced </span>Theory
            </span>
          ),
          titledesc: 'Take your skills to new heights with in-depth lessons on music theory, improvisation, and advanced playing techniques.'
        },
        {
          imageSrc: '/images/hand-on-the-neck-of-a-guitar-in-a-g-chord.jpg',
          title: (
            <span>
              <span style={spanStyles}>Genre</span> Specialization
            </span>
          ),
          titledesc: 'Dive into specific genres like blues, rock, classical, and more, with specialized lessons tailored to each style.'
        },
      ];
      
  return (
<div style={{ backgroundColor: 'black', height: '100vh', overflow: 'hidden', padding: '0 60px' }}>
    <h1 style={{color:'white',fontSize:'3rem'}}><span style={spanStyles}>GuitarPlay</span> Videos</h1>
      <Row style={{ marginTop: '30px' }}>
      
          <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} showArrows={false} >
            {sliderData.map((item, index) => (
            <div key={index} style={{backgroundColor:'black', height: '80vh',textAlign:'left'}}>
            <div
              
              style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${item.imageSrc})`,
                  height: '70vh',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
              }}
              >
            
              <div style={{height:'100%' , transition: 'width 0.5s, height 0.5s',padding:'80px 100px'}}>
                    <div >
                      <h1 style={h1Styles}>
                        {item.title}
                      </h1>
                      <p style={pstyles}>
                      {item.titledesc}
                      </p>
                    </div>
                </div>
  
              </div>
            </div>
            ))}
          </Carousel>
    

      </Row>
    </div>
  )
}

export default About_Videos
