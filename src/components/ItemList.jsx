import Item from "./Item"
import '../styles/ItemList.css'

const ItemList = ({products}) => {
    return(
        <div className="contenedor">
            {products.map(prod => <Item key= {prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList