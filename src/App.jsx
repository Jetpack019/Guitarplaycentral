import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter

import VideoSearch from "./pages/VideoSearch/VideoSearch";
import Homepage from "./pages/Homepage";
import Products from "./pages/Product";
import Blogs from "./pages/Blogs";
import Tuner from "./pages/Tuner";

const App = () => {
  return (
    <Router> {/* Wrap the Router with BrowserRouter */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/tuner" element={<Tuner />} />
        <Route path="/video" element={<VideoSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
