import { Link } from "react-router-dom"
import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount.jsx"
import { useCartContext } from "../../context/CartContext.jsx"
import "../ItemDetail/ItemDetail.css"

export const ItemDetail = ({ producto }) => {
    const [itemCant, setItemCant] = useState(false)
    const{cartAdd} = useCartContext()

    const onAdd = (cant) => {
       cartAdd({...producto, cant})
        setItemCant(true)
    }

    

    return (
        <div className="card-detail">
            <h1>Watch details</h1>
            <img className="img-card-detail" src={producto.imagen} alt={producto.marca} />
            <div className="footer-detail" >
            <h2>{producto.marca}</h2>
            <span> U$D {producto.precio}</span>
            <p>More details...</p>
            
                {
                    !itemCant ?
                        <ItemCount onAdd={onAdd} />
                        :
                        <>
                            <Link to={"/cart"} className="btn-compra" >Go to cart</Link>
                            <Link to={"/"} className="btn-compra" >Continue buying</Link>
                        </>
                }


            </div>
        </div>
    )
}






