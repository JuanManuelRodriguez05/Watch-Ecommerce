import  { useCounter } from "../../hook/useCounter.jsx"
import "../ItemCount/ItemCount.css"

const ItemCount = ({ initial= 1, stock= 5, onAdd }) => {
    const { counter, handleCount, handleRemove } = useCounter(initial, 1, stock)


return (
    <div className="cart-count" >
        <button className="btn" onClick={handleRemove}> - 1</button>
        <label> {counter} </label>
        <button className="btn" onClick={handleCount}> + 1 </button>
        <button className="btn-cart" >Agregar al Carrito</button>
    </div>
)}

export default ItemCount