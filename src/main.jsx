import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { FavProvider } from "./context/FavProvider";
import { LoginProvider } from "./context/loginContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <FavProvider>
          <LoginProvider>
            <GoogleOAuthProvider  clientId="885885580401-oh7ku9qnsg7ossanteh89l5ccrmi9mfe.apps.googleusercontent.com">
              <App></App>
            </GoogleOAuthProvider>
          </LoginProvider>
        </FavProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
