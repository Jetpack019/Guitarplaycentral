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
    shopName: "Melody Masters",
    shopAddress: "123 Harmonious Street, Melody Village, Quezon City, Metro Manila, Philippines",
    type: 'acoustic guitar',
    styles: 'Classical',
    occasions: 'Concert',
    materials: 'Spruce',
    image: 'images/acoustic/acoustic_classical.webp',
    imageBackground:'images/electric.jpg',
    price: 699.99,
  },
  {
    id: 2,
    shopName: "Guitar Groove Emporium",
    shopAddress: "456 Melody Avenue, Riffwood Barangay, Makati City, Metro Manila, Philippines",
    type: 'electric guitar',
    styles: 'Telecaster',
    occasions: 'Recording',
    materials: 'Ash',
    image: 'images/electric/electric_telecaster.jpg',
    imageBackground:'images/electric.jpg',
    price: 899.99,
  },
  {
    id: 3,
    shopName: "Strings & Chords Haven",
    shopAddress: "789 Chord Progression Road, Harmony Heights, Pasig City, Metro Manila, Philippines",
    type: 'bass guitar',
    styles: 'Precision Bass',
    occasions: 'Live Performance',
    materials: 'Basswood',
    image: 'images/bass/bass_precision.jpg',
    imageBackground:'images/electric.jpg',
    price: 799.99,
  },
  {
    id: 4,
    shopName: "Rhythmic Riffs Hub",
    shopAddress: "321 Riff Rock Lane, Strummingville, Cebu City, Cebu, Philippines",
    type: 'accessories',
    styles: 'Guitar Strap',
    occasions: 'All',
    materials: 'Leather',
    image: 'images/accessories/acc_strap.jpg',
    imageBackground:'images/electric.jpg',
    price: 19.99,
  },
  {
    id: 5,
    shopName: "Harmonious Harmony Store",
    shopAddress: "654 Fretboard Drive, Amplifier Village, Davao City, Davao del Sur, Philippines",
    type: 'sales',
    styles: 'Guitar Tuner',
    occasions: 'All',
    materials: 'Plastic',
    image: 'images/sale/sale_tuner.jpg',
    imageBackground:'images/electric.jpg',
    price: 14.99,
  },
  {
    id: 6,
    shopName: "Fretful Pleasures Shop",
    shopAddress: "987 Amplifier Boulevard, Rhythmic Barangay, Mandaluyong City, Metro Manila, Philippines",
    type: 'acoustic guitar',
    styles: 'Folk',
    occasions: 'Casual',
    materials: 'Cedar',
    image: 'images/acoustic/acoustic_folk.jpg',
    imageBackground:'images/electric.jpg',
    price: 549.99,
  },
  {
    id: 7,
    shopName: "The Guitar Jam Lab",
    shopAddress: "147 Acoustic Serenade Circle, Chordwood Village, Taguig City, Metro Manila, Philippines",
    type: 'electric guitar',
    styles: 'Les Paul',
    occasions: 'Concert',
    materials: 'Mahogany',
    image: 'images/electric/electric_lespaul.jpg',
    imageBackground:'images/electric.jpg',
    price: 1199.99,
  },
  {
    id: 8,
    shopName: "Axecrafters Emporium",
    shopAddress: "258 Electric Avenue, Melodic Heights, Marikina City, Metro Manila, Philippines",
    type: 'bass guitar',
    styles: 'Jazz Bass',
    occasions: 'Recording',
    materials: 'Alder',
    image: 'images/bass/bass_jazz.jpg',
    imageBackground:'images/electric.jpg',
    price: 699.99,
  },
  {
    id: 9,
    shopName: "Tips and Tricks",
    shopAddress: "369 Harmonic Heights Terrace, Fretwood Barangay, Bacolod City, Negros Occidental, Philippines",
    type: 'accessories',
    styles: 'Guitar Picks',
    occasions: 'All',
    materials: 'Plastic',
    image: 'images/accessories/acc_picks.jpg',
    imageBackground:'images/electric.jpg',
    price: 0.99,
  },
  {
    id: 10,
    shopName: "The Guitar Lounge",
    shopAddress: "852 Strum & Pick Place, Soundscapes Village, Iloilo City, Iloilo, Philippines",
    type: 'sales',
    styles: 'Guitar Strings',
    occasions: 'All',
    materials: 'Steel',
    image: 'images/sale/sale_strings.jpg',
    imageBackground:'images/electric.jpg',
    price: 9.99,
  },
  {
    id: 11,
    shopName: "Melody Matrix Boutique",
    shopAddress: "753 Melodic Meadows Lane, Guitar Groove Barangay, Antipolo City, Rizal, Philippines",
    type: 'acoustic guitar',
    styles: 'Flamenco',
    occasions: 'Dance Performance',
    materials: 'Cypress',
    image: 'images/acoustic/acoustic_flamenco.jpg',
    imageBackground:'images/electric.jpg',
    price: 899.99,
  },
  {
    id: 12,
    shopName: "Harmonic Hues Shop",
    shopAddress: "951 Guitar Groove Way, Chordal Village, Caloocan City, Metro Manila, Philippines",
    type: 'electric guitar',
    styles: 'SG',
    occasions: 'Rock Concert',
    materials: 'Mahogany',
    image: 'images/electric/electric_SG.jpg',
    imageBackground:'images/electric.jpg',
    price: 999.99,
  },
  {
    id: 13,
    shopName: "Melody Makers Emporium",
    shopAddress: "468 Chordal Crossing, Melodyville, Zamboanga City, Zamboanga del Sur, Philippines",
    type: 'bass guitar',
    styles: 'Thunderbird',
    occasions: 'Metal Performance',
    materials: 'Mahogany',
    image: 'images/bass/bass_thunderbird.jpg',
    imageBackground:'images/electric.jpg',
    price: 1199.99,
  },
  {
    id: 14,
    shopName: "Guitar Stand",
    shopAddress: "159 Melody Masters Square, Harmonic Village, Cagayan de Oro City, Misamis Oriental, Philippines",
    type: 'accessories',
    styles: 'Guitar Stand',
    occasions: 'All',
    materials: 'Wood',
    image: 'images/accessories/acc_stand.jpg',
    imageBackground:'images/electric.jpg',
    price: 29.99,
  },
  {
    id: 15,
    shopName: "Guitar Capo",
    shopAddress: "357 Fretful Pleasures Lane, Fretwood Barangay, Pasay City, Metro Manila, Philippines",
    type: 'sales',
    styles: 'Guitar Capo',
    occasions: 'All',
    materials: 'Metal',
    image: 'images/sale/sale_capo.jpg',
    imageBackground:'images/electric.jpg',
    price: 12.99,
  },
  {
    id: 16,
    shopName: "Melodic Ventures",
    shopAddress: "624 Virtuoso Vista, Rhythmic Village, Angeles City, Pampanga, Philippines",
    type: 'acoustic guitar',
    styles: 'Jumbo',
    occasions: 'Outdoor Event',
    materials: 'Maple',
    image: 'images/acoustic/acoustic_jumbo.jpg',
    imageBackground:'images/electric.jpg',
    price: 799.99,
  },
  {
    id: 17,
    shopName: "Guitar Groove Emporium",
    shopAddress: "246 Soundscapes Street, Melodyville, General Santos City, South Cotabato, Philippines",
    type: 'electric guitar',
    styles: 'Flying V',
    occasions: 'Metal Concert',
    materials: 'Mahogany',
    image: 'images/electric/electric_flyingv.jpg',
    imageBackground:'images/electric.jpg',
    price: 1299.99,
  },
  {
    id: 18,
    shopName: "Fretful Pleasures Shop",
    shopAddress: "835 Rhythmic Riffs Avenue, Guitar Groove Barangay, San Juan City, Metro Manila, Philippines",
    type: 'bass guitar',
    styles: 'Music Man',
    occasions: 'Funk Performance',
    materials: 'Basswood',
    image: 'images/bass/bass_musicman.jpg',
    imageBackground:'images/electric.jpg',
    price: 899.99,
  },
  {
    id: 19,
    shopName: "Strings & Chords Haven",
    shopAddress: "528 Axecrafters Alley, Strummingville, Valenzuela City, Metro Manila, Philippines",
    type: 'accessories',
    styles: 'Guitar Case',
    occasions: 'All',
    materials: 'Hardshell',
    image: 'images/accessories/acc_cover.jpg',
    imageBackground:'images/electric.jpg',
    price: 69.99,
  },
  {
    id: 20,
    shopName: "Melodic Ventures",
    shopAddress: "753 Harmonious Horizon Trail, Chordwood Village, Lipa City, Batangas, Philippines",
    type: 'sales',
    styles: 'Guitar Slide',
    occasions: 'All',
    materials: 'Glass',
    image: 'images/sale/sale_slide.jpg',
    imageBackground:'images/electric.jpg',
    price: 8.99,
  },
  {
    id: 21,
    shopName: "Melody Masters",
    shopAddress: "852 Chordal Journeys Place, Melodic Heights, Butuan City, Agusan del Norte, Philippines",
    type: 'acoustic guitar',
    styles: 'Dreadnought',
    occasions: 'Country Music',
    materials: 'Rosewood',
    image: 'images/acoustic/acoustic_dreadnaught.jpg',
    imageBackground:'images/electric.jpg',
    price: 899.99,
  },
  {
    id: 22,
    shopName: "Guitar Groove Emporium",
    shopAddress: "369 Melody Matrix Circle, Amplifier Village, Cainta City, Rizal, Philippines",
    type: 'electric guitar',
    styles: 'Hollow Body',
    occasions: 'Jazz Concert',
    materials: 'Maple',
    image: 'images/electric/electric_hollowbody.jpg',
    imageBackground:'images/electric.jpg',
    price: 1099.99,
  },
  {
    id: 23,
    shopName: "Strings & Chords Haven",
    shopAddress: "174 The Guitar Nexus Place, Harmonic Village, Mandaue City, Cebu, Philippines",
    type: 'bass guitar',
    styles: 'Double Neck',
    occasions: 'Experimental Performance',
    materials: 'Alder',
    image: 'images/bass/bass_doubleneck.jpg',
    imageBackground:'images/electric.jpg',
    price: 1499.99,
  },
  {
    id: 24,
    shopName: "Fretful Pleasures Shop",
    shopAddress: "483 Harmonic Hues Square, Strummingville, Calamba City, Laguna, Philippines",
    type: 'accessories',
    styles: 'Guitar Strings Cleaner',
    occasions: 'All',
    materials: 'Microfiber',
    image: 'images/accessories/acc_cleanser.jpg',
    imageBackground:'images/electric.jpg',
    price: 7.99,
  },
  {
    id: 25,
    shopName: "Melodic Ventures",
    shopAddress: "675 Melody Makers Terrace, Melodic Heights, Naga City, Camarines Sur, Philippines",
    type: 'sales',
    styles: 'Guitar Humidifier',
    occasions: 'All',
    materials: 'Sponge',
    image: 'images/sale/sale_humidifier.jpg',
    imageBackground:'images/electric.jpg',
    price: 11.99,
  },
  {
    id: 26,
    shopName: "The Guitar Lounge",
    shopAddress: "264 Chordal Connections Lane, Rhythmic Barangay, San Fernando City, La Union, Philippines",
    type: 'acoustic guitar',
    styles: 'Parlor',
    occasions: 'Intimate Performance',
    materials: 'Mahogany',
    image: 'images/acoustic/acoustic_parlor.webp',
    imageBackground:'images/electric.jpg',
    price: 599.99,
  },
  {
    id: 27,
    shopName: "Melody Makers Emporium",
    shopAddress: "951 The Guitar Lounge Road, Amplifier Village, Olongapo City, Zambales, Philippines",
    type: 'electric guitar',
    styles: 'Iceman',
    occasions: 'Metal Concert',
    materials: 'Basswood',
    image: 'images/electric/electric_iceman.jpg',
    imageBackground:'images/electric.jpg',
    price: 999.99,
  },
  {
    id: 28,
    shopName: "Strings & Chords Haven",
    shopAddress: "852 Harmonic Haven Street, Chordwood Village, Biñan City, Laguna, Philippines",
    type: 'bass guitar',
    styles: 'Rickenbacker',
    occasions: 'Rock Performance',
    materials: 'Maple',
    image: 'images/bass/bass_rickenbacker.jpg',
    imageBackground:'images/electric.jpg',
    price: 1399.99,
  },
  {
    id: 29,
    shopName: "Tips and Tricks",
    shopAddress: "753 Melody Makers Terrace, Melodic Heights, Santa Rosa City, Laguna, Philippines",
    type: 'accessories',
    styles: 'Guitar Wall Hanger',
    occasions: 'All',
    materials: 'Metal',
    image: 'images/accessories/acc_hanger.jpg',
    imageBackground:'images/electric.jpg',
    price: 17.99,
  },
  {
    id: 30,
    shopName: "Guitar Stand",
    shopAddress: "369 The Guitar Spot Square, Guitar Groove Barangay, Santa Rosa City, Laguna, Philippines",
    type: 'sales',
    styles: 'Guitar Stand',
    occasions: 'All',
    materials: 'Wood',
    image: 'images/sale/sale_stand.jpg',
    imageBackground:'images/electric.jpg',
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
  const [priceRange, setPriceRange] = useState([0, 1500]); // Default price range
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
  const handleProductCardClick = (product) => {
    // Navigate to the Product_AddCart component and pass the product data and selected size as state
    navigate('/product_add_cart', { state: { product } });
  };
  
  return (
    <div>
            <div className="hero-section"
        style={{
          backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("images/electric.jpg")`,
          height: '20vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition:'center'
        }}
      >
        <div className="container d-flex h-100">
          <div className="hero-content" style={{textAlign:'left'}}>
            <h4 style={{textAlign:'left',color:'white',marginTop:'50px'}}>
              Products
            </h4>
          
          </div>
        </div>
      </div>
      <div  style={{ height: '100% ', overflowY: 'auto',paddingTop:'20px' }}>
        
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
                  max={1500}
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
                <div className="product-info1">
                    <p style={{margin:'0',fontWeight:'500'}}>Style: {product.styles}</p>
                    <p style={{margin:'0',fontWeight:'500'}}>Price: ${product.price}</p>
                  </div>
                  <img
                    src={product.image}
                    alt={`Product ${product.id}`}
                    style={{ width: '200px', height: '200px' }} />
            
                </div>
              ))}
          </div>
        </div>
    </div>
      </div>
    </div>
  );
}

export default ProductFilter;
