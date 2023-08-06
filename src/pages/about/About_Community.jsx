import React from 'react';
import { Col, Row } from 'react-bootstrap';

function About_Community() {
  const h1Styles = {
    color: 'white',
    fontSize: '2.5rem',
  };
  const h2Styles = {
    color: 'white',
    fontSize: '1rem',
    textAlign: 'center',
    padding: '0 20px',
  };
  const spanStyles = {
    color: '#FFE500',
  };

  const guitarCategories = [
    {
      title: (
        <span>
       Engage with like-minded guitarists in our lively forums, where you can share experiences, seek advice, and participate in exciting discussions.

        </span>
      ),
      imageSrc: '/images/acoustic.jpg',
    },
    {
      title: (
        <span>
   Join us in virtual events, workshops, and challenges that foster camaraderie and encourage growth within the GuitarPlay Central community.
        </span>
      ),
      imageSrc: '/images/electric.jpg',
    },
    {
      title: (
        <span>
         Discover talented guitarists through our artist spotlights, where we showcase their works and inspire the community with their musical journeys.
        </span>
      ),
      imageSrc: '/images/bass.jpg',
    },
  ];

  return (
    <div style={{ backgroundColor: 'black', height: '100vh', overflow: 'hidden', padding: '0 120px' }}>
      <Col style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1 style={h1Styles}>
          Discover Your <span style={spanStyles}>Perfect</span> Guitar
        </h1>
       
        <Row style={{ marginTop: '40px' }}>
        {guitarCategories.map((category, index) => (
            <Col key={index}>
            <div style={{ textAlign: 'center', position: 'relative' }}>
                {index === 1 && (
                <>
                    <div
                    style={{
                        position: 'absolute',
                        top: '40%',
                        left: '-60px',
                        transform: 'translate(-50%, -50%)',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: '#FFE500',
                    }}
                    ></div>
                    <div
                    style={{
                        position: 'absolute',
                        top: '40%',
                        left: '-40px',
                        transform: 'translate(-50%, -50%)',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: '#FFE500',
                    }}
                    ></div>
                <div
                        style={{
                            position: 'absolute',
                            top: '40%',
                            left: '-20px',
                            transform: 'translate(-50%, -50%)',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#FFE500',
                        }}
                        ></div>
                        <div
                        style={{
                            position: 'absolute',
                            top: '40%',
                            left: '0px',
                            transform: 'translate(-50%, -50%)',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#FFE500',
                        }}
                        ></div>
                        <div
                        style={{
                            position: 'absolute',
                            top: '40%',
                            left: '20px',
                            transform: 'translate(-50%, -50%)',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#FFE500',
                        }}
                        ></div>
                        <div
                        style={{
                            position: 'absolute',
                            top: '40%',
                            left: '40px',
                            transform: 'translate(-50%, -50%)',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#FFE500',
                        }}
                        ></div>
                </>
                )}

                <img
                src={category.imageSrc}
                alt=""
                style={{
                    width: '250px',
                    height: '250px',
                    borderWidth: '8px',
                    borderColor: '#FFE500',
                    borderStyle: 'solid',
                    borderRadius: '100%',
                }}
                />

                {index === 1 && (
                <>
                
                    <div
                        style={{
                            position: 'absolute',
                            top: '40%',
                            right: '-70px',
                            transform: 'translate(-50%, -50%)',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#FFE500',
                        }}
                        ></div>
                        
                        <div
                        style={{
                            position: 'absolute',
                            top: '40%',
                            right: '-50px',
                            transform: 'translate(-50%, -50%)',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#FFE500',
                        }}
                        ></div>
                        <div
                        style={{
                            position: 'absolute',
                            top: '40%',
                            right: '-30px',
                            transform: 'translate(-50%, -50%)',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#FFE500',
                        }}
                        ></div>
                        <div
                        style={{
                            position: 'absolute',
                            top: '40%',
                            right: '-10px',
                            transform: 'translate(-50%, -50%)',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#FFE500',
                        }}
                        ></div>
                        <div
                        style={{
                            position: 'absolute',
                            top: '40%',
                            right: '10px',
                            transform: 'translate(-50%, -50%)',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#FFE500',
                        }}
                        ></div>
                        <div
                        style={{
                            position: 'absolute',
                            top: '40%',
                            right: '30px',
                            transform: 'translate(-50%, -50%)',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#FFE500',
                        }}
                        ></div>
                </>
                )}

                <h2 style={h2Styles}>{category.title}</h2>
            </div>
            </Col>
        ))}
        </Row>  
      </Col>
    </div>
  );
}

export default About_Community;
