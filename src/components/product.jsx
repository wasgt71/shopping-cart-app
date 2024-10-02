//Add to cart
//Quantity Selector

import { useState, useRef } from "react";
import ShoppingCart from "../components/Cart.jsx";

const ProductDisplay = ({ id, src, description, price, value, onClick }) => {
  return (
    <>
      <div id={id}>
        <img src={src}></img>
        <h5>{description}</h5>
        <p>{price}</p>
        <button id={id} value={value} onClick={onClick}>
          Add Cart
        </button>
      </div>
    </>
  );
};

function Product() {
  const [Product, setProduct] = useState([]);
  
  const handleClick = (event) => {
    const { id, value } = event.target;
    setProduct((prevProducts) => {
      const data = [...prevProducts, { id, value }];
      console.log(data);
      return data;

    });

  };


  return (
    <>
      <div>
        <ProductDisplay
          id="shirt"
          src="vite.svg"
          description="nice shirt"
          price="$4.99"
          onClick={handleClick}
        ></ProductDisplay>
        <ProductDisplay id="pants" onClick={handleClick}></ProductDisplay>
      </div>
    </>
  );
}


export default Product;
