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
  const [currentProducts, setProducts] = useState([]);

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

    fetchProducts(); 
  }, []);

  /*useEffect(() => {
    setTimeout(() => {
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
      
    }, delay);
  }, [delay]); */

 

  /*useEffect(() => {
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
*/
  const addToCart = () => {
    //const product = { title, price, description, };
    setCart(product.title)// => [...prevCart, product]);
    console.log(cart)
  };


  return (
    <>
      <button onClick={addToCart}>Add To Cart</button>
      <Outlet context={{ cart, setCart }}></Outlet>
    </>
  );
};

export default HandleCart;

