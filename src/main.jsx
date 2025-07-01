import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { FavProvider } from "./context/FavProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <FavProvider>
          <App></App>
        </FavProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
