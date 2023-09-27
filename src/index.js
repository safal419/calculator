// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CartProvider } from "./components/Basics/CartContext"; // Import the CartProvider

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
