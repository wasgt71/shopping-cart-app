import { useState } from 'react'
import { Link } from "react-router-dom";
import AddCart from './components/addCart.jsx'
import Profile from './components/product.jsx'

function App() {
  

  return (
    <>
    <ul>
      <li>
        <Link to="Cart">Cart</Link>
      </li>
    </ul>
    <Profile></Profile>
    </>
  )
}

export default App
