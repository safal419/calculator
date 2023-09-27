import React, { useState } from "react";
import { useCart } from "./CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleIncreaseQuantity = (item) => {
    updateCartItemQuantity(item.id, item.quantity + 1);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateCartItemQuantity(item.id, item.quantity - 1);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCompleteOrder = () => {
    setIsOrdered(true); // Show the success message
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cart.length === 0 ? ( // Display "Cart is empty" message when cart is empty
        <h3>Your cart is empty</h3>
      ) : (
        <div className="cart-items-row">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <div className="item-name-price">
                  <h2>{item.name}</h2>
                  <p>Price: Rs. {item.price * item.quantity}</p>
                  <div className="quantity-control">
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <button
                    className="quantity-button"
                    onClick={() => handleDecreaseQuantity(item)}
                  >
                    -
                  </button>
                  <button
                    className="quantity-button"
                    onClick={() => handleIncreaseQuantity(item)}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="complete-order">
            <p>Total amount : Rs. {calculateTotal()}</p>
            <p>Shipping fee : Rs. 50</p>
            <p>Grand Total : Rs. {calculateTotal() + 50}</p>
            <button className="btn btn-success" onClick={handleCompleteOrder}>
              Checkout
            </button>
            {isOrdered && (
              <div
                className="alert alert-success d-flex align-items-center"
                role="alert"
              >
                <strong>Success...</strong> Your Order has been successfully
                completed.
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
