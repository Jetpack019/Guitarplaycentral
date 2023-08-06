import React, { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '10px',

};
const spanStyles = {
    color: '#FFE500',
  };
function About_FAQs() {
  const [showAnswers, setShowAnswers] = useState([]);

  const questionsAndAnswers = [
    {
      question: 'Are the guitar lessons suitable for beginners?',
      answer: 'Absolutely! Our guitar lessons cater to all skill levels, including beginners. We offer step-by-step tutorials and easy-to-follow instructions to help you get started on your guitar journey.',
    },
    {
      question: 'How do I know which guitar is right for me?',
      answer: 'Choosing the right guitar depends on your playing style, preferences, and skill level. Our expert team is here to assist you in selecting the perfect instrument that suits your needs.',
    },
    {
      question: 'Can I sell my own guitar on your platform?',
      answer: 'We currently do not have a feature for individual sellers, but we appreciate your interest. However, you can explore our collection of quality guitars and accessories available for purchase.',
    },
    {
      question: 'What brands of guitars do you offer in your collection?',
      answer: 'We curate our collection with a wide range of reputable guitar brands known for their quality and craftsmanship. Some popular brands include Fender, Gibson, Taylor, Ibanez, and many more.',
    },
    {
      question: 'Do you offer international shipping for your products?',
      answer: 'Yes, we offer international shipping to many countries. During checkout, you can select your country, and shipping options will be displayed.',
    },
    {
      question: 'Can beginners join your community events?',
      answer: 'Absolutely! Our community events are open to guitarists of all levels. It is a great opportunity to connect with fellow enthusiasts, learn from each other, and grow as a guitarist.',
    },
  ];


  const toggleAnswer = (index) => {
    setShowAnswers((prevShowAnswers) => ({
      ...prevShowAnswers,
      [index]: !prevShowAnswers[index],
    }));
  };

  return (
    <div style={{ backgroundColor: 'black', padding: '30vh 100px' }}>
      <h1 style={{ textAlign: 'center', color: 'white', marginBottom: '20px' }}>
        <span style={spanStyles}>Frequently </span>Asked Questions
      </h1>
      <div style={gridContainerStyle}>
        {questionsAndAnswers.map((qa, index) => (
          <div
            key={index}
            style={{
              margin: '10px 20px',
              padding: '10px 10px',
              borderRadius: '20px',
              backgroundColor: '#FFE500',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginLeft: '20px',
                color: 'black',
              }}
              onClick={() => toggleAnswer(index)}
            >
              {showAnswers[index] ? <FiChevronDown /> : <FiChevronRight />}
              {qa.question}
            </div>
            {showAnswers[index] && (
              <div style={{ marginTop: '5px', marginLeft: '20px' }}>{qa.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About_FAQs;
