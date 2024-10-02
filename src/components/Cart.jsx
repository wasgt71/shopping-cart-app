//delete products
//quantity selector

import { useState } from 'react';
import Product from '../components/product.jsx'


const ShoppingCart = () => {
    
fetch('../components/product.jsx', { mode: 'cors' })
.then((response) => console.log(response.value))  



    return (
        <>
      <div>
        <h1>Hello from profile page!</h1>
        <p>So, how are you?</p>
      </div>
     
      <Product></Product>
      </>
    );
  };
  
  export default ShoppingCart;
  