import React from 'react'
import { useState } from 'react'
import '../styles/ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity +1)
    }}

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
    }}


  return (
    <div className='Counter'>
        <div className='Controls'>
            <button className='Button' class="btn btn-danger" onClick={decrement}>-</button>
            <h4 className='Number'>  {quantity}  </h4>
            <button className='Button' class="btn btn-success" onClick={increment}>+</button>
        </div>
        <div>
            <button className='Button' class="btn btn-info" onClick={()=> onAdd(quantity)} disabled= {!stock}>
                Agregar al carrito
            </button>
        </div>
    </div>
  )
}

export default ItemCount;