import React from 'react'

function Blog_hero() {
    const h1Styles = {
        color: 'white',
        fontSize: '5rem',
       paddingTop:'50px'
      };
    
      const spanStyles = {
        color: '#FFE500',
      };
  return (
    <div
    className="hero-section"
    style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/images/bass.jpg')",
      height: '60vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      
    }}
  >
    <div className="container d-flex h-100">
      <div className="hero-content">
        <h1 style={h1Styles}>
          <span style={spanStyles}>B</span>LOGS 
        </h1>
     
      </div>
    </div>
  </div>
  )
}

export default Blog_hero
