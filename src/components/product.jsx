//Add to cart
//Quantity Selector

import { useState, useEffect } from "react";
import Cart from "../components/Cart.jsx";
import HandleCart from "../components/addCart.jsx";
import "../styles.css";
import { useCart } from "../components/cartContext.jsx";


export const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);
  
  
  const plusQuantity = () => {
  setQuantity(quantity + 1);
  console.log(quantity);
  }
  
  
  const minusQuantity = () => {
  setQuantity(quantity - 1);
  console.log(quantity);
  }
  
  const inputValue = (e) => {
  setQuantity(Number(e.target.value));
  console.log(quantity);
  }
  
  return (
  <>
  <input type="text" onChange={inputValue} value={quantity} placeholder={quantity}></input>
  <button onClick={plusQuantity}>+</button>
  <button onClick={minusQuantity}>-</button>
  
  </>
  )
  }




const Product = ({ delay, addToCart }) => {
  const [imageURL, setImageURL] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [title, setTitle] = useState([]);
  const [currentProducts, setProducts] = useState([]);
  const { cart, setCart } = useCart();

  const catalogue = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await Promise.all(
        catalogue.map(id =>
          fetch(`https://fakestoreapi.com/products/${id}`, { mode: "cors" })
            .then(res => res.json())
        )
      );
      setProducts(products);
    };

    fetchProducts(); // Fetch products immediately on mount
  }, []);

/*
  useEffect(() => {
    
      const fetchProducts = catalogue.map(id => 
      fetch(`https://fakestoreapi.com/products/${id}`, { mode: "cors" })
        .then((res) => res.json())
        .then ((json) => {
          setProducts((prevProducts) => [...prevProducts, json])
           //setPrice(json.price);
          //setDescription(json.description);
          //setPrice(json.price);
          //setTitle(json.title);
          //setImageURL(json.image);
        }));     
  }, [delay]);
*/
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product,]);
    //const product = ({ key: product.id, title: product.title, src: product.image, description: product.description, price: product.price });
    console.log(cart);
    
  };



  return (
    <>
      <div>
        {currentProducts.map((product) => (
        <div key={product.id}>
        <h3>{product.title}</h3>
        <img src={product.image}></img>
        <h5>{product.description}</h5>
        <p>{product.price}</p>
        <QuantitySelector></QuantitySelector>
        <button onClick={() => handleAddToCart(product)}>AddCart</button>
        </div>
        ))}
      </div>
        
      
    </>
  );
};

export default Product;

