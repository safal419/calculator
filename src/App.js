import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Basics/Navbar";
import Resturant from "./components/Basics/Resturant"; // Corrected the import path
import Home from "./components/Basics/Home";
import CartPage from "./components/Basics/CartPage";
import Footer from "./components/Basics/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Resturant />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
