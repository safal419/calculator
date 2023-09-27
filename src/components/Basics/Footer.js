import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Footer = () => {
  const { cart } = useCart();
  const totalUniqueItems = cart.length;
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Newari Kitchen</div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/food">Foods</Link>
        </div>
        <div className="footer-social">
          <Link to="/cart">
            <button className="btn btn-secondary">
              {" "}
              Cart({totalUniqueItems})
            </button>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        © 2023 Newari Kitchen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
