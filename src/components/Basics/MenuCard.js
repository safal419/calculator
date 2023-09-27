import React, { useState } from "react";
import { useCart } from "./CartContext";
import "../Basics/style.css";

const MenuCard = ({ menuData }) => {
  const { addToCart, cart } = useCart();
  const [quantities, setQuantities] = useState({});

  const handleChangeQuantity = (itemId, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: value,
    }));
  };

  const getItemInCart = (itemId) => {
    return cart.find((item) => item.id === itemId);
  };

  const handleOrderNow = (elem) => {
    const inputQuantity = parseInt(quantities[elem.id]) || 0;

    if (inputQuantity > 0) {
      // Check if quantity is greater than 0
      const existingCartItem = getItemInCart(elem.id);

      if (existingCartItem) {
        addToCart({
          ...existingCartItem,
          quantity: inputQuantity, // Set the quantity to the input value
        });
      } else {
        addToCart({ ...elem, quantity: inputQuantity }); // Set the quantity to the input value
      }

      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [elem.id]: "0",
      }));
    }
  };

  return (
    <section className="main-card--cointainer">
      {menuData.map((elem) => (
        <div className="card-container" key={elem.id}>
          <div className="card">
            <div className="card-body">
              <span className="card-number card-circle subtle">{elem.id}</span>
              <h2 className="card-title">{elem.name}</h2>
              <span className="card-description subtle">
                {elem.description}
              </span>{" "}
              <br />
              <p className="price">Rs.{elem.price}</p>
              <img src={elem.image} alt={elem.name} className="card-media" />
              <div className="down">
                <input
                  type="number"
                  min="0"
                  value={quantities[elem.id] || "0"}
                  onChange={(e) =>
                    handleChangeQuantity(elem.id, e.target.value)
                  }
                />
                <button
                  type="button"
                  className="card-tag  subtle"
                  onClick={() => handleOrderNow(elem)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MenuCard;
