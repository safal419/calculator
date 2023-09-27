import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import CartPage from "./CartPage"; // Import the CartPage component

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <>
      <h1 className="titlename">Available Items </h1>
      <MenuCard menuData={menuData} addToCart={addToCart} />

      {/* Render the CartPage component */}
      {cart.length > 0 && <CartPage cart={cart} />}
    </>
  );
};

export default Resturant;
