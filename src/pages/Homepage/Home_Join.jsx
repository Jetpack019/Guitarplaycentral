import React from 'react'
import { Col } from 'react-bootstrap'

function Home_Join() {
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

  return (
    <div style={{ backgroundColor: 'black', height: '50vh',overflow:'hidden',padding:'0 50px'}}>
      <Col>
      <h1 style={h1Styles}>
      Join Our Thriving <span style={spanStyles}> Guitar Community</span> 
     </h1>
    <p style={pstyles}>
    Connect with fellow guitar enthusiasts in our vibrant community. Share your own performances, exchange insights, and make lasting connections with like-minded players from all around the world. GuitarPlay Central is a place where music brings us together, fostering an environment of collaboration and creativity.
    </p>
      </Col>
    </div>
  )
}

export default Home_Join
