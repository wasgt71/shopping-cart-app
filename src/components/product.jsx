//Add to cart
//Quantity Selector

import { useState, useEffect } from "react";
import Cart from '../components/Cart.jsx';
import HandleCart from '../components/addCart.jsx';
import '../styles.css';

const Product = ( {delay, addToCart} ) => {
  const [imageURL, setImageURL] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [title, setTitle] = useState(null);
  const [currentProducts, setProducts] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products/1', { mode: 'cors' })
        .then(res => res.json())
       .then(json => {
        console.log(json);
        setDescription(json.description);
        setPrice(json.price);
        setTitle(json.title);
        setImageURL(json.image);
       })

    }, delay);
  }, [delay]);


  

  const handleAddToCart = () => {
    const product = { title, price, description, imageURL };
    addToCart(product);
    console.log(product);
  };



return (
<>
<div>
  <h3>{title}</h3>
        <img src={imageURL}></img>
        <h5>{description}</h5>
        <p>{price}</p>
       
      </div>
      <HandleCart></HandleCart>


</>

)
}







export default Product;