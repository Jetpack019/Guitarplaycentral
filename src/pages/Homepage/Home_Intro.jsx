import React, { useState } from 'react';
import { Col } from 'react-bootstrap';

function Home_Intro() {
  const spanStyles = {
    color: '#FFE500',
  };

  const [animationButton, setAnimationButton] = useState(false);
  const [imagePosition, setImagePosition] = useState('center');
  const [marginContent, setMarginContent] = useState('0');
  const handleButtonClick = () => {
    setAnimationButton(!animationButton);
    setImagePosition(animationButton ? 'center' : 'left');
    setMarginContent(animationButton ? '0' : '100px');
  };

  return (
    <div
      style={{
        height: '120vh',
        backgroundColor: 'black',
      }}
    >
      <div style={{ textAlign: 'center' ,paddingTop:'120px'}}>
        <Col>
          <div
            style={{
              opacity: animationButton ? 0 : 1,
              transition: 'opacity 0.5s', // Add a CSS transition for smooth fade-out
            }}
          >
            {/* Render the <h1> element only when animationButton is false */}
            {!animationButton && (
              <h1>
                <span style={spanStyles}>Let's</span> Start
              </h1>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: imagePosition === 'center' ? 'center' : 'flex-start',
              marginLeft: marginContent === '0' ? '0' : '100px',
              transition: 'justify-content 0.5s', // Add a transition for smooth positioning change
            }}
          >
            {/* Clicking this image will trigger the animation */}
           <div style={{display:'flex'}}>
           <div style={{display:'flex',flexDirection:'column',}}>
           {animationButton && (
              // Show the info text in the right corner when the button is clicked
              <h1>
              <span style={spanStyles}>Let's</span> Start
            </h1>
            )}
            <img
              style={{
                width: animationButton ? '300px' : '200px',
                height: animationButton ? '300px' : '200px',
                backgroundColor: 'black',
                transition: 'width 0.5s, height 0.5s', // Add CSS transitions for smooth animation
              }}
              src="/images/info_button.png"
              alt=""
              onClick={handleButtonClick}
            />
           </div>
            {animationButton && (
              // Show the info text in the right corner when the button is clicked
              <div style={{ marginLeft: '100px',paddingRight:'100px'}}>
                <h1 style={{ color: 'white',textAlign:'left', marginBottom:'40px'}}>Your  <span style={spanStyles}>One-Stop</span> Guitar Playground</h1>
                <p style={{ color: 'white', fontSize: '20px',textAlign:'left' }}>GuitarPlay Central is more than just an online store; it's a complete guitar playground designed to inspire, educate, and connect guitar lovers worldwide. We are dedicated to providing you with a seamless and enjoyable experience, ensuring that your journey as a guitarist is filled with joy and success.</p>
              </div>
            )}
           </div>
          </div>
        </Col>
      </div>
    </div>
  );
}

export default Home_Intro;
