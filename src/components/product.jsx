//Add to cart
//Quantity Selector

import { useState, useEffect } from "react";
import Cart from "../components/Cart.jsx";
import HandleCart from "../components/addCart.jsx";
import "../styles.css";
import { useCart } from "../components/cartcontext.jsx";
import { useQuantity } from "../components/quantitycontext.jsx";
import { useQuantDisplay } from "../components/quantitydisplaycontext.jsx";
import QuantitySelector from "../components/quantityselector.jsx";


  const Product = ({ delay, addToCart }) => {
  const [imageURL, setImageURL] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [title, setTitle] = useState([]);
  const [currentProducts, setProducts] = useState([]);
  const { cart, setCart } = useCart();
  const { currentQuantity, saveQuantity } = useQuantity();
  const { quantDisplay, setQuantDisplay } = useQuantDisplay();


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
      console.log(products);
      setProducts(products);
    };

    fetchProducts();
  }, []);

   const handleAddToCart = (product) => {
    product.details = currentQuantity
    setCart((prevCart) => [...prevCart, product]);
    //setQuantDisplay((prevQuant) => [...prevQuant, {currentQuantity}])
    //saveQuantity([...currentQuantity, "hello"]);
   
    //saveQuantity((prevQuantity) => [...prevQuantity], [currentQuantity]);
    //saveQuantity((prevQuantity) => [...prevQuantity, quantity]);
    //const product = ({ key: product.id, title: product.title, src: product.image, description: product.description, price: product.price });
    console.log(cart);
  };




  return (
    <>
      <div>
        {currentProducts.map((product) => (
        <div key={product.id}>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title}></img>
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

/*    <input type="text" onChange={inputValue} value={quantity} placeholder={quantity}></input>
        <button onClick={minusQuantity}>-</button>
        <button onClick={plusQuantity}>+</button>
        <button onClick={() => handleAddToCart(product)}>AddCart</button>*/