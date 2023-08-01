import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Home_Tune() {
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
  return (
    <div style={{ backgroundColor: 'black', height: '100vh',overflow:'hidden',padding:'0 80px'}}>
        <Row  style={{marginTop:'100px'}}> 
            <Col>
            <div style={{height:'100%'}}>
                <div style={{padding:'40px'}} >
                <h1 style={h1Styles}>
           <span style={spanStyles}> Fine-Tune</span>   Your Sound
                </h1>
                <p style={pstyles}>
                Perfect your sound with our advanced guitar tuners. Ensure your instrument is in harmony, allowing you to create music that resonates with your soul. 
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
             <h1 style={bottompstyles}>
             <span style={spanStyles}>Guitar </span> Lessons and Tutorials
                </h1>
                </div>
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default Home_Tune
