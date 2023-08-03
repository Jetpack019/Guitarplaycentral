import React from 'react'

function Blog_content() {

    const spanStyles = {
        color: '#FFE500',
      };
    const blogContentData = [
        {
          image: 'images/Guitar.png',
          title: '“Mastering the Basics: Essential Guitar Techniques for Beginners”',
          text:
            'Learn the foundational guitar techniques every beginner should know to kickstart their musical journey. Lay a solid musical foundation and kickstart your guitar journey with fundamental techniques.',
        },
        {
          image: 'images/Guitar.png',
          title: '"Unleashing the Power of Guitar Effects: A Comprehensive Guide"',
          text:
            'Dive into the world of guitar effects pedals and discover how to use them to enhance your sound and creativity. Explore the world of guitar effects pedals to elevate your sound with depth and creativity.',
        },
        {
          image: 'images/Guitar.png',
          title: '"Behind the Strings: The Art of Guitar Maintenance and Care"',
          text:
            'Get expert tips on maintaining and caring for your guitar to keep it in top condition and ensure it plays beautifully. Learn expert tips for maintaining your guitar, ensuring top condition and optimal performance.',
        },
        {
          image: 'images/Guitar.png',
          title: '"Exploring Guitar Genres: A Journey Through Music Styles"',
          text:
            'Take a musical adventure through various guitar genres, from blues and rock to jazz and beyond. Embark on a musical adventure, exploring diverse guitar genres that shaped music history.',
        },
        {
          image: 'images/Guitar.png',
          title: '"Songwriting Secrets: Crafting Emotive Lyrics and Memorable Melodies"',
          text:
            'Uncover the art of songwriting and learn how to create heartfelt lyrics and captivating melodies for your songs. Uncover the art of songwriting, honing your ability to create powerful lyrics and captivating melodies.',
        },
        {
          image: 'images/Guitar.png',
          title: '"Finding Your Signature Sound: A Guide to Guitar Tone"',
          text:
            'Discover the factors that shape your guitar tone and how to craft a signature sound that defines your unique style. Discover the elements influencing your guitars distinctive tone, and develop a signature sound that reflects your musical identity.',
        },
    
      ];
  return (
    <div style={{backgroundColor:'black'}}>
    <div className="container" style={{paddingTop:'50px'}}>
    <h1 className="card-title" style={{textAlign:'center',fontWeight:'bold',color:'white'}}> <span style={spanStyles}>Late</span>st <span style={spanStyles}>B</span>logs</h1>
    <br />
    <div className="row">
      {blogContentData.map((blog, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card h-100" style={{borderWidth:'5px',borderColor:'white',borderRadius:'50px'}}> {/* Set a fixed height for the card */}
            <img src={blog.image} className="card-img-top" alt={`Blog Post ${index + 1}`} style={{backgroundColor:'black',borderTopRightRadius:'50px',borderTopLeftRadius:'50px'}} />
            <div className="card-body d-flex flex-column" style={{backgroundColor:'black',borderBottomRightRadius:'50px',borderBottomLeftRadius:'50px'}}> {/* Use flex-column to make text and button aligned */}
              <h5 className="card-title" style={{color:'white'}}>{blog.title}</h5>
              <p className="card-text" style={{color:'white'}}>{blog.text}</p>
              <button className="btn  mt-auto mx-4" style={{backgroundColor: '#FFE500' , color: 'black',fontWeight:'bold',borderRadius:'20px'}}>
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
    </div>
  )
}

export default Blog_content
