import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomNavbar from '../../components/navbar';
import { useCart } from './Cart_Content';

import '../../components/productadd.css'
import { Form } from 'react-bootstrap';
import CartNavbar from '../../components/navbar_cart';

function Product_AddCart() {


  const spanStyles = {
    color: '#E97451',
  };

  // Access the product data passed as state
  const location = useLocation();

  const { state: { product } = {} } = location;
  const { addToCart } = useCart();


  const handleAddToCart = () => {
      addToCart(
        product,
      );
  };


  const navigate = useNavigate();
  const handleCheckoutClick = () => {
      navigate('/checkout', {
        state: { product },
      });
  }

  
  return (
    <div style={{backgroundColor:'black',height:'150vh'}}>
      <CartNavbar />
      <div className="hero-section"
        style={{
          backgroundImage: product && product.imageBackground
            ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${product.imageBackground})`
            : "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8))",
          height: '30vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          display: 'flex', // Add this line to use flex layout
          alignItems: 'flex-end', // Add this line to align content to bottom
        }}
      >
        <div className="container d-flex h-100">
          <div className="hero-content" style={{textAlign:'left'}}>
            <h4 style={{textAlign:'left',color:'white',marginTop:'50px'}}>
            {product.shopName}
            </h4>
            <h5 style={{textAlign:'left',color:'white',margin:'0'}}>
            {product.shopAddress}
            </h5>
          </div>
        </div>
      </div>

      {product ? (
        <div className="container my-5 " >
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-3">
                <div className="card-header ">
                  <h3 className="text-center ">{product.type}</h3>
                </div>
                <div className="card-body text-center">
                  <img src={product.image} alt={product.type} className="img-fluid mb-3" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-info" style={{backgroundColor:'black'}}>
                <p className="lead">Type: {product.styles}</p>
                <p className="lead">Occasions: {product.occasions}</p>
                <p className="lead">Materials: {product.materials}</p>
                <p className="lead">Price: ${product.price}</p>
            
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="btn btn-warning btn-lg"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="btn btn-warning btn-lg"
                  onClick={() => handleCheckoutClick(product)}
                >
                  Checkout
                </button>
              </div>
              
            </div>
          </div>
        </div>
      ) : (
        <p className="lead text-center mt-5">Product data not available</p>
      )}
    </div>
  );
}


export default Product_AddCart;
