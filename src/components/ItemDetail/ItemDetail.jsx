import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount.jsx"

export const ItemDetail = ({item}) => {


    return (
        <div className="card-detail">
            <h1>Detalles del reloj</h1>
            <img className="img-card-detail" src={item.imagen} alt={item.marca} />
            <h2>{item.marca}</h2>
            <span>{item.precio}</span>
            <p>Detalles de el producto...</p>
            <div className="footer-detail" >
                <ItemCount/>
                {/* <button className="btn-cart" >Agregar al carrito</button> */}
            </div>
        </div>
    )
}






