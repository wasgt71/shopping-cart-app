import { useState } from 'react'
import { Link } from "react-router-dom";
import AddCart from './components/addCart.jsx'
import Product from './components/product.jsx'

function App() {
  

  return (
    <>
    <ul>
      <li>
        <Link to="Cart">Cart</Link>
      </li>
    </ul>
    <Product></Product>
    </>
  )
}

export default App
