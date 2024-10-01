//Add to cart
//Quantity Selector

import { useState, useEffect } from "react";

const ProductDisplay = ({id, src, description, price, onClick,}) => {
  return (
    <>
    <div id={id}>
      <img src={src}></img>
      <h5>{description}</h5>
      <p>{price}</p>
      <button data-id={data-id} onClick={onClick}></button>
</div>
    </>
  );
};




function Product() {

const [product, setProduct] = useState([])


const handleChange = (event) => {
setProduct(data-id)
console.log("hello");

}


  return (
    <>
      <div>
      <ProductDisplay src="vite.svg" description="nice shirt" price="$4.99" onClick={handleChange}></ProductDisplay>
      
      </div>
    </>
  );
}

export default Product;
