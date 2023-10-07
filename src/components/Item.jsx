
import { Link } from "react-router-dom"
import React from "react"
import '../styles/Item.css'

const Item = ({id, name, img, price, stock}) => {
    
    return (
        
     <div className="container"> 
        <div className="card">
        <article className="card-body">
            <header className="">
                <h2 className="">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="" width={'250rem'}/>
            </picture>
            <section>
                <p className="">
                    Precio: ${price}
                </p>
                <p className="">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className=""> 
            <Link to={`/item/${id}`} className="link" >
                <button  className="detail">Ver detalle</button>
               </Link> 
               
            </footer>

        </article>
        </div>
     </div>
    )
}

export default Item 
