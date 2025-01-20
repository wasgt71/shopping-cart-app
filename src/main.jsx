import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.jsx";
import Cart from "./components/Cart.jsx"
import HandleCart from "./components/addCart.jsx"
import { CartProvider } from "./components/cartContext.jsx";
import { QuantProvider } from './components/quantitycontext.jsx';
import { QuantDisplayProvider } from './components/quantitydisplaycontext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <Cart />,
    children: [
      {
        path: "",
        element: <HandleCart />, 
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <QuantProvider>
        <QuantDisplayProvider>
    <RouterProvider router={router} />
    </QuantDisplayProvider>
    </QuantProvider>
    </CartProvider>
  </StrictMode>
);




