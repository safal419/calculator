import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Navbar = ({ onSearch }) => {
  const { cart } = useCart();
  const totalUniqueItems = cart.length;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand mx-3" to="/">
          Newari Kitchen
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center "
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-5">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link" to="/food">
                Foods
              </Link>
            </li>
          </ul>

          <Link to="/cart" className="btn btn-dark mx-5">
            Cart ({totalUniqueItems})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
