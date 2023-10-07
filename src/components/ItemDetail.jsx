import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"
import { CartContext } from "../context/CartContext"


const ItemDetail = ({id, name, img, price, stock, category, description}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {id,name,price,img,category}
        
        addItem(item, quantity)

    }
    

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" width={'350px'}/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>   
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="Option" > Terminar compra </Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                
            </footer>

        </article>
    )
}

export default ItemDetail