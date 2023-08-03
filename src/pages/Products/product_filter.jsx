import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaFemale, FaMale, FaChild, FaSuitcase, FaPercent } from 'react-icons/fa';
import "../../components/sidebar.css"
import {  useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';

const categoriesData = {
  styles: ['Classical', 'Telecaster', 'Precision Bass', 'Folk', 'Les Paul', 'Thunderbird', 'Jumbo', 'Flying V', 'Music Man', 'Dreadnought', 'Hollow Body', 'Double Neck', 'Parlor', 'Iceman', 'Rickenbacker'],
  occasions: ['Concert', 'Recording', 'Live Performance', 'All', 'Dance Performance', 'Rock Concert', 'Metal Performance', 'Outdoor Event', 'Country Music', 'Jazz Concert', 'Experimental Performance', 'Intimate Performance'],
  materials: ['Spruce', 'Ash', 'Basswood', 'Leather', 'Plastic', 'Cedar', 'Mahogany', 'Maple', 'Alder', 'Hardshell', 'Steel', 'Rosewood', 'Microfiber', 'Sponge'],
};



const labelstyles = {
color: 'white',
fontSize: '1rem',
marginRight: '10px', 
alignSelf: 'flex-start'
};

const h3styles = {
color: 'white',
fontSize: '2rem',
textAlign: 'center',
marginTop: '30px'
};

const inputstyles = {
borderWidth: '0',
color: '#E97451',    
marginRight: '5px'
};

const products = [
  {
    id: 1,
    type: 'acoustic guitar',
    styles: 'Classical',
    occasions: 'Concert',
    materials: 'Spruce',
    image: 'images/electric.jpg',
    price: 699.99,
  },
  {
    id: 2,
    type: 'electric guitar',
    styles: 'Telecaster',
    occasions: 'Recording',
    materials: 'Ash',
    image: 'images/products/electric_guitar/telecaster.jpg',
    price: 899.99,
  },
  {
    id: 3,
    type: 'bass guitar',
    styles: 'Precision Bass',
    occasions: 'Live Performance',
    materials: 'Basswood',
    image: 'images/products/bass_guitar/precision_bass.jpg',
    price: 799.99,
  },
  {
    id: 4,
    type: 'accessories',
    styles: 'Guitar Strap',
    occasions: 'All',
    materials: 'Leather',
    image: 'images/products/accessories/guitar_strap.jpg',
    price: 19.99,
  },
  {
    id: 5,
    type: 'sales',
    styles: 'Guitar Tuner',
    occasions: 'All',
    materials: 'Plastic',
    image: 'images/products/sales/guitar_tuner.jpg',
    price: 14.99,
  },
  {
    id: 6,
    type: 'acoustic guitar',
    styles: 'Folk',
    occasions: 'Casual',
    materials: 'Cedar',
    image: 'images/products/acoustic_guitar/folk.jpg',
    price: 549.99,
  },
  {
    id: 7,
    type: 'electric guitar',
    styles: 'Les Paul',
    occasions: 'Concert',
    materials: 'Mahogany',
    image: 'images/products/electric_guitar/les_paul.jpg',
    price: 1199.99,
  },
  {
    id: 8,
    type: 'bass guitar',
    styles: 'Jazz Bass',
    occasions: 'Recording',
    materials: 'Alder',
    image: 'images/products/bass_guitar/jazz_bass.jpg',
    price: 699.99,
  },
  {
    id: 9,
    type: 'accessories',
    styles: 'Guitar Picks',
    occasions: 'All',
    materials: 'Plastic',
    image: 'images/products/accessories/guitar_picks.jpg',
    price: 0.99,
  },
  {
    id: 10,
    type: 'sales',
    styles: 'Guitar Strings',
    occasions: 'All',
    materials: 'Steel',
    image: 'images/products/sales/guitar_strings.jpg',
    price: 9.99,
  },
  {
    id: 11,
    type: 'acoustic guitar',
    styles: 'Flamenco',
    occasions: 'Dance Performance',
    materials: 'Cypress',
    image: 'images/products/acoustic_guitar/flamenco.jpg',
    price: 899.99,
  },
  {
    id: 12,
    type: 'electric guitar',
    styles: 'SG',
    occasions: 'Rock Concert',
    materials: 'Mahogany',
    image: 'images/products/electric_guitar/sg.jpg',
    price: 999.99,
  },
  {
    id: 13,
    type: 'bass guitar',
    styles: 'Thunderbird',
    occasions: 'Metal Performance',
    materials: 'Mahogany',
    image: 'images/products/bass_guitar/thunderbird.jpg',
    price: 1199.99,
  },
  {
    id: 14,
    type: 'accessories',
    styles: 'Guitar Stand',
    occasions: 'All',
    materials: 'Wood',
    image: 'images/products/accessories/guitar_stand.jpg',
    price: 29.99,
  },
  {
    id: 15,
    type: 'sales',
    styles: 'Guitar Capo',
    occasions: 'All',
    materials: 'Metal',
    image: 'images/products/sales/guitar_capo.jpg',
    price: 12.99,
  },
  {
    id: 16,
    type: 'acoustic guitar',
    styles: 'Jumbo',
    occasions: 'Outdoor Event',
    materials: 'Maple',
    image: 'images/products/acoustic_guitar/jumbo.jpg',
    price: 799.99,
  },
  {
    id: 17,
    type: 'electric guitar',
    styles: 'Flying V',
    occasions: 'Metal Concert',
    materials: 'Mahogany',
    image: 'images/products/electric_guitar/flying_v.jpg',
    price: 1299.99,
  },
  {
    id: 18,
    type: 'bass guitar',
    styles: 'Music Man',
    occasions: 'Funk Performance',
    materials: 'Basswood',
    image: 'images/products/bass_guitar/music_man.jpg',
    price: 899.99,
  },
  {
    id: 19,
    type: 'accessories',
    styles: 'Guitar Case',
    occasions: 'All',
    materials: 'Hardshell',
    image: 'images/products/accessories/guitar_case.jpg',
    price: 69.99,
  },
  {
    id: 20,
    type: 'sales',
    styles: 'Guitar Slide',
    occasions: 'All',
    materials: 'Glass',
    image: 'images/products/sales/guitar_slide.jpg',
    price: 8.99,
  },
  {
    id: 21,
    type: 'acoustic guitar',
    styles: 'Dreadnought',
    occasions: 'Country Music',
    materials: 'Rosewood',
    image: 'images/products/acoustic_guitar/dreadnought.jpg',
    price: 899.99,
  },
  {
    id: 22,
    type: 'electric guitar',
    styles: 'Hollow Body',
    occasions: 'Jazz Concert',
    materials: 'Maple',
    image: 'images/products/electric_guitar/hollow_body.jpg',
    price: 1099.99,
  },
  {
    id: 23,
    type: 'bass guitar',
    styles: 'Double Neck',
    occasions: 'Experimental Performance',
    materials: 'Alder',
    image: 'images/products/bass_guitar/double_neck.jpg',
    price: 1499.99,
  },
  {
    id: 24,
    type: 'accessories',
    styles: 'Guitar Strings Cleaner',
    occasions: 'All',
    materials: 'Microfiber',
    image: 'images/products/accessories/guitar_strings_cleaner.jpg',
    price: 7.99,
  },
  {
    id: 25,
    type: 'sales',
    styles: 'Guitar Humidifier',
    occasions: 'All',
    materials: 'Sponge',
    image: 'images/products/sales/guitar_humidifier.jpg',
    price: 11.99,
  },
  {
    id: 26,
    type: 'acoustic guitar',
    styles: 'Parlor',
    occasions: 'Intimate Performance',
    materials: 'Mahogany',
    image: 'images/products/acoustic_guitar/parlor.jpg',
    price: 599.99,
  },
  {
    id: 27,
    type: 'electric guitar',
    styles: 'Iceman',
    occasions: 'Metal Concert',
    materials: 'Basswood',
    image: 'images/products/electric_guitar/iceman.jpg',
    price: 999.99,
  },
  {
    id: 28,
    type: 'bass guitar',
    styles: 'Rickenbacker',
    occasions: 'Rock Performance',
    materials: 'Maple',
    image: 'images/products/bass_guitar/rickenbacker.jpg',
    price: 1399.99,
  },
  {
    id: 29,
    type: 'accessories',
    styles: 'Guitar Wall Hanger',
    occasions: 'All',
    materials: 'Metal',
    image: 'images/products/accessories/guitar_wall_hanger.jpg',
    price: 17.99,
  },
  {
    id: 30,
    type: 'sales',
    styles: 'Guitar Stand',
    occasions: 'All',
    materials: 'Wood',
    image: 'images/products/sales/guitar_stand.jpg',
    price: 22.99,
  },
];




function ProductFilter() {

  
  const [activeButton, setActiveButton] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState({
    styles: [],
    occasions: [],
    materials: [],
  });
  const [priceRange, setPriceRange] = useState([0, 1000]); // Default price range
  const handleCheckboxChange = (category, value) => {
    setSelectedCategories((prevState) => ({
      ...prevState,
      [category]: prevState[category].includes(value)
        ? prevState[category].filter((item) => item !== value)
        : [...prevState[category], value],
    }));
  };

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  const text_buttons = [
    { text: 'All' },
    { text: 'Acoustic Guitar' },
    { text: 'Electric Guitar' },
    { text: 'Bass Guitar' },
    { text: 'Accessories' },
    { text: 'Sales' }
  ];


  const renderCheckboxes = (category) => {
    return categoriesData[category].map((option) => (
      <label key={option} style={labelstyles}>
        <input
          style={inputstyles}
          type="checkbox"
          value={option}
          checked={selectedCategories[category].includes(option)}
          onChange={() => handleCheckboxChange(category, option)}
        />
        {option}
      </label>
    ));
  };
  
  const getFilteredProducts = () => {
    // Filter products based on activeButton and selectedCategories
    const filteredProducts = products.filter((product) => {
      if (activeButton !== 0) {
        if (product.type !== text_buttons[activeButton].text.toLowerCase()) {
          return false;
        }
      }

      // Check if the product matches all the selected categories
      for (const category in selectedCategories) {
        if (selectedCategories[category].length > 0) {
          if (!selectedCategories[category].includes(product[category.toLowerCase()])) {
            return false;
          }
        }
      }

      // Check if the product price is within the selected price range
      const [minPrice, maxPrice] = priceRange;
      if (product.price < minPrice || product.price > maxPrice) {
        return false;
      }

      return true;
    });

    return filteredProducts;
  };
  const navigate = useNavigate();
  const handleProductCardClick = (product, selectedSize) => {
    // Navigate to the Product_AddCart component and pass the product data and selected size as state
    navigate('/product_add_cart', { state: { product, selectedSize } });
  };
  
  return (
   <div  style={{ height: '100% ', overflowY: 'auto' }}>
     <div className="product-filter d-flex flex-wrap justify-content-center">
          {text_buttons.map((button, index) => (
            <button
              key={index}
              className={`filter-button ${activeButton === index ? 'active' : ''}`}
              onClick={() => handleButtonClick(index)}>
              {button.text}
            </button>
          ))}
      </div>
      <div class="vDivider"></div>
    <div style={{display:'flex'}}>
      <div className="sidebar" >
        <h3 style={h3styles}>CATEGORY</h3>
        <div className="category-section">
          <h3 style={h3styles}>Styles:</h3>
          {renderCheckboxes('styles')}
        </div>
        <div className="category-section">
          <h3 style={h3styles}>Occasions:</h3>
          {renderCheckboxes('occasions')}
        </div>
        <div className="category-section">
          <h3 style={h3styles}>Materials:</h3>
          {renderCheckboxes('materials')}
        </div>
        <div className="category-section">
          <h3 style={h3styles}>Price Range:</h3>
            <input
              type="range"
              className="form-range"
              min={0}
              max={1000}
              value={priceRange[0]} // Update this to use priceRange[0] instead of priceRange
              onChange={(event) => setPriceRange([parseInt(event.target.value), priceRange[1]])} />
            <div className="d-flex justify-content-between">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
        </div>
      </div>
      <div className="container"  >
      
      <div className="product-cards-container" >
      {getFilteredProducts().map((product) => (
              <div key={product.id} className="product-card"  onClick={() => handleProductCardClick(product, selectedCategories.materials[0])}>
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                style={{ width: '200px', height: '200px' }} />
              <div className="product-info1">
                <p>Style: {product.styles}</p>
                <p>Occasions: {product.occasions}</p>
                <p>Materials: {product.materials}</p>
                <p>Price: ${product.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
 </div>
   </div>
  );
}

export default ProductFilter;
