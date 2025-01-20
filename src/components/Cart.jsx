//delete products
//quantity selector
import { useState, useEffect } from "react";
import HandleCart from "../components/addCart.jsx";
import { Link } from "react-router-dom";
import React from "react";
import { useCart } from "../components/cartcontext.jsx";
import { useQuantity } from "../components/quantitycontext.jsx";
import { useQuantDisplay } from "../components/quantitydisplaycontext.jsx";
import QuantitySelector from "../components/quantityselector.jsx";

const Cart = ({title, setTitle}) => {
  const { cart, setCart } = useCart();
  const { quantDisplay, setQuantDisplay } = useQuantDisplay();
  const [ placeHolder, setPlaceHolder ] = useState(undefined);
  const [ saved, deleteProduct ] = useState(true);

  const deleteItems = () => {
     setCart([]);
  };

const deleteItem = (id) => {
  setCart((prevCart) => prevCart.filter((product) => product.id !== id));
}

  if (cart.length === 0) {
    return <h2>No items in Cart</h2>;
  }

  return (
    <div>
    {cart.map((product) => (
    <div key={product.id}>
    <h3>{product.title}</h3>
    <img src={product.image} alt={product.title} />
    <h5>{product.description}</h5>
    <p>{product.price}</p>
    <input type="text" placeholder={product.details}></input>
    <button onClick={() => deleteItem(product.id)}>Delete Item</button>
    </div>
    
    ))}
    <button onClick={deleteItems}>Delete All</button>
  </div>

    /*<div>
      <Link to="App">Home</Link>
      <ul>
        
<input type="text" onChange={inputValue} value={quantity} placeholder={quantity}></input>
    <button onClick={minusQuantity}>-</button>
    <button onClick={plusQuantity}>+</button>






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
