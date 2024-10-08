import { useState } from 'react'
import { Link } from "react-router-dom";
import Product from './components/product.jsx'


function App() {

  return (
    <>
    
    <ul>
      <li>
        <Link to="Cart">addCart</Link>
      </li>
    </ul>
    <Product></Product>
    
    
    
    </>
  )
}

export default App
