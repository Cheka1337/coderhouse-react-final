import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext)

    return (
        <div className="d-flex justify-content-around aling items-center">
        <img src={item.img} alt={item.name} width={'150rem'}/>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>SubTotal: ${item.quantity * item.price}</p>
            <button className="btn btn-danger" onClick={()=>removeItem(item.id)}>X</button>
        </div>
    )
}

export default CartItem