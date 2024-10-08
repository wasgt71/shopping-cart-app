import React, { useState, useEffect } from "react";
import Product from "../components/product.jsx";
import Cart from "../components/Cart.jsx";
import { Outlet } from "react-router-dom";
import { useCart } from "../components/cartContext.jsx";

const HandleCart = ({ delay, addingToCart }) => {
  //const [cart, setCart] = useState([]);
  const [imageURL, setImageURL] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [title, setTitle] = useState(null);
  const { cart, setCart } = useCart();

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products/1", { mode: "cors" })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setDescription(json.description);
          setPrice(json.price);
          setTitle(json.title);
          setImageURL(json.image);
        });
    }, delay);
  }, [delay]);

  const addToCart = () => {
    const product = { title, price, description, imageURL };
    setCart((prevCart) => [...prevCart, product]);
    console.log("Cart:", [...cart, product]);
  };

  return (
    <>
      <button onClick={addToCart}>Add To Cart</button>
      <Outlet context={{ cart, setCart }}></Outlet>
    </>
  );
};

export default HandleCart;

