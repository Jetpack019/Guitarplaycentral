import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter

import VideoSearch from "./pages/VideoSearch/VideoSearch";
import Homepage from "./pages/Homepage";
import Products from "./pages/Product";
import Blogs from "./pages/Blogs";
import Tuner from "./pages/Tuner";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Product_AddCart from "./pages/Products/product_add";
import AllProducts from "./pages/Products/allproduct";
import Checkout_Process from "./pages/Products/Checkout_Process";
import About from "./pages/About";
const App = () => {
  return (
    <Router> {/* Wrap the Router with BrowserRouter */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/tuner" element={<Tuner />} />
        <Route path="/product_add_cart"  element={<Product_AddCart/>} />
        <Route path="/addtocart" element={<AllProducts />} />
        <Route path="/video" element={<VideoSearch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout_Process/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
