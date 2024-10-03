//Add to cart
//Quantity Selector

import { useState, useEffect } from "react";
import ShoppingCart from "../components/Cart.jsx";
import '../styles.css';

const Profile = ( {delay, id} ) => {
  const [imageURL, setImageURL] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [title, setTitle] = useState(null);
  const [cart, setCart] = useState([]);


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


  const addCart = () => {
    setCart((prevCart) => {
      const data = [...prevCart, { title, price, description, imageURL }];
      console.log(data);
      return data;
  
    });
  
  }



return (
<>
<div>
  <h3>{title}</h3>
        <img src={imageURL}></img>
        <h5>{description}</h5>
        <p>{price}</p>
        <button onClick={addCart}>
          Add Cart
        </button>
      </div>


</>

)


};



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

export default Profile;


