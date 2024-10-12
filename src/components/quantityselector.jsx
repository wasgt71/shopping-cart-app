
import { useState } from 'react';
import { useQuantity } from '../components/quantitycontext.jsx';
import { useCart } from "../components/cartContext.jsx";

const QuantitySelector = ({onChange}) => {
    const [quantity, setQuantity] = useState(1);
    const { currentQuantity, saveQuantity } = useQuantity();
    const { cart, setCart } = useCart();
    //const value = quantity;
  
    const pQuantity = () => {
    setQuantity(quantity + 1)
    saveQuantity(quantity);
    console.log(currentQuantity);
    }
  
    const mQuantity = () => {
    setQuantity(quantity - 1);
    saveQuantity([quantity]);
    console.log(quantity);
    }
    
    const iValue = (e) => {
    setQuantity(Number(e.target.value));
    saveQuantity([quantity]);
    console.log(quantity);
   
    }
  
    return (
    <>
   
    <input onChange={iValue} type="text" value={quantity}></input>
    <button onClick={pQuantity}>+</button>
    <button onClick={mQuantity}>-</button>
    
    </>
    )
    }

    export default QuantitySelector;