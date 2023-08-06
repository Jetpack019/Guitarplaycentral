import React from 'react'

function Home_Music() {
    const h1Styles = {
        color: 'white',
        fontSize: '2.5rem',
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
    <div style={{backgroundColor:'black', height: '100vh',}}>
          <div
            
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/images/band-on-stage.jpg')",
                height: '80vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
            >
            <div style={{backgroundColor:'black',opacity:'0.8',width:'60%',height:'100%' , transition: 'width 0.5s, height 0.5s',}}>
                <div style={{padding:'40px'}} >
                <h1 style={h1Styles}>
                Unlock the <span style={spanStyles}> Music Within You</span>
                </h1>
                <p style={pstyles}>
                With a wide range of tutorials, resources, and a supportive community, GuitarPlay Central empowers guitar enthusiasts of all skill levels to enhance their playing, explore new genres, and share their passion for music with like-minded individuals from around the world. Whether you dream of playing to a packed stadium or simply enjoy strumming by the campfire, GuitarPlay Central is the ultimate destination for all things guitar.
                </p>
            
                </div>
            </div>
            </div>
    </div>
  )
}

export default Home_Music
