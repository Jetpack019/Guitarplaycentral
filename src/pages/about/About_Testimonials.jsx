import React from 'react'

function About_Testimonials() {
        
    const h1Styles = {
        color: 'white',
        fontSize: '1.7rem',
      };
    const spanStyles = {
        color: '#FFE500',
      };
    const pstyles = {
        color: 'white',
        fontSize: '1rem',
        FontFace: 'Montserrat',
        marginTop:'40px'
      };
    const sections = [
        {
          name:(
            <span>   <span style={spanStyles}>Sarah</span> Lawson</span>
          ),
          image: '/images/acoustic.jpg',
          content: `Comment: "GuitarPlay Central has been a game-changer for me as a beginner guitarist. The lessons are clear, and the supportive community has boosted my confidence in playing!"`,
        },
        {
          name:(
            <span> <span style={spanStyles}>John</span> Mitchell</span>
          ),
          image: '/images/acoustic.jpg',
          content: `Comment: "I can't thank GuitarPlay Central enough for the inspiring performances! They've motivated me to practice harder and aspire to become a better guitarist."`,
        },
        {
          name:(
            <span> <span style={spanStyles}>Emily</span>Ramirez</span>
          ),
          image: '/images/acoustic.jpg',
          content: `Comment: "I recently purchased a guitar from GuitarPlay Central, and the quality is outstanding! It has elevated my playing experience to a whole new level."`,
        },
        {
          name:(
            <span><span style={spanStyles}>Alex</span> Harper</span>
          ),
          image: '/images/acoustic.jpg',
          content: `Comment: "The community engagement at GuitarPlay Central is fantastic. I've made friends with fellow guitarists and received valuable tips and feedback on my playing."`,
        },
      ];
  return (
   <div style={{backgroundColor:'black',paddingTop:'100px'}}>
     <h1 style={{textAlign:'center',color:'white'}}><span style={spanStyles}>Testi</span>monials</h1>
    <div style={{ backgroundColor: 'black',display:'grid',  gridTemplateColumns: 'repeat(2, 1fr)' }}>
             
      {sections.map((category, index) => (
        <div key={index} >
    
            <img 
                src={category.image}
                alt=""
                style={{
                    position:'relative',
                    top:'50px',
                    left:'90px',
                    margin:'0',
                    width: '80px',
                    height: '80px',
                    borderWidth: '3px',
                    borderColor: '#FFE500',
                    borderStyle: 'solid',
                    borderRadius: '100%',}}/>  
        <div style={{ border: '2px solid #FFE500', borderColor: '#FFE500',borderRadius:'20px', margin: '0 60px', padding: '40px 100px',backgroundColor: 'black'}}>
            <div >
              <h1 style={h1Styles}>
               {category.name}
              </h1>
              <p style={pstyles}>
                 {category.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
   </div>
  )
}

export default About_Testimonials
