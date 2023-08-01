import React, { useState } from 'react'

function Home_hero() {
  const h1Styles = {
    color: 'white',
    fontSize: '3rem',
  };
  const [backgroundImage, setBackgroundImage] = useState(
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/band-on-stage.jpg')"
  );
  const [pauseText, setpauseText] = useState(
    "Pause"
  );
    const spanStyles = {
      color: '#FFE500',
    };

  const pstyles = {
    color: 'white',
    fontSize: '2rem',
    FontFace: 'Open Sans'
  };

  const buttonStyles = {
    borderRadius: '0', 
    height: '60px',
    width: '70px',
    color: '#FFE500', 
    fontWeight: 'bold'
  };
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: backgroundImage,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="container d-flex justify-content-center align-items-center text-center h-100">
        <div className="hero-content">
          <h1 style={h1Styles}>
            <span style={spanStyles}>GUITAR PLAY </span>CENTRAL
          </h1>
          <p style={pstyles}>
          "Harmony Unleashed, Melodies Unlocked"
          </p>
          <button type="button" className="btn btn-outline-light  btn-lg" style={buttonStyles} onClick={() => setBackgroundImage("url('/images/woman-playing-guitar.jpg')")}>
            | |  
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home_hero
