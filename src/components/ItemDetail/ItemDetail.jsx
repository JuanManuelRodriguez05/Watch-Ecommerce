import "../ItemDetail/ItemDetail.css"

export const ItemDetail = ({id, imagen, marca, precio }) => {
    console.log(marca)
    console.log(precio)

    return (
        <div className="card-detail">
            <h2>Detalles del reloj:{id} </h2>
            <img className="img-card-detail" src={imagen} alt={marca} />
            <h2>Marca:{marca}</h2>
            <span>${precio}</span>
            <p>Detalles de el producto...</p>

        </div>
    )
}






