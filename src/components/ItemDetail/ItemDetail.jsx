import "../ItemDetail/ItemDetail.css"

export const ItemDetail = ({ item }) => {


    return (
        <div className="card-detail">
            <h2>Detalles del reloj: </h2>
            <img className="img-card-detail" src={item.imagen} alt={item.marca} />
            <h2>Marca:{item.marca}</h2>
            <span>${item.precio}</span>
            <p>Detalles de el producto...</p>

        </div>
    )
}






