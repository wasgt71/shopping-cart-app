//delete products
//quantity selector
import { useState, useEffect } from "react";
import HandleCart from "../components/addCart.jsx";
import { Link } from "react-router-dom";
import React from "react";
import { useCart } from "../components/cartContext.jsx";


const Cart = ({}) => {
  const { cart, setCart } = useCart();

  const deleteItems = () => {
    setCart([]);
  };

  if (cart.length === 0) {
    return <h2>No items in Cart</h2>;
  }

  return (
    <div>
    {cart.map((product) => (
    <div key={product.id}>
    <h3>{product.title}</h3>
    <img src={product.image}></img>
    <h5>{product.description}</h5>
    <p>{product.price}</p>
    
    </div>
    ))}
    <button onClick={deleteItems}>Delete All</button>
  </div>
    /*<div>
      <Link to="App">Home</Link>
      <ul>
        
      </ul>
      <h3>{cart[0].title}</h3>
      <img src={cart[0].imageURL}></img>
      <h5>{cart[0].description}</h5>
      <p>{cart[0].price}</p>
      <button onClick={deleteItems}>Delete</button>
    </div>
    */
  );
  
};

export default Cart;
