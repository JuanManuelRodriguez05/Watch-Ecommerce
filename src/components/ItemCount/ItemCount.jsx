import { useCounter } from "../../hook/useCounter.jsx"
import "../ItemCount/ItemCount.css"
import { useCartContext } from '../../context/CartContext.jsx';

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
    const {counter, handleCount, handleRemove } = useCounter(initial, 1, stock)
    const {message} = useCartContext()

    

    const handleAddToCart = () => {
        onAdd(counter)
        message()
    }

    return (
        <div className="cart-count" >
            <button className="btn" onClick={handleRemove}> - 1</button>
            <label> {counter} </label>
            <button className="btn" onClick={handleCount}> + 1 </button>
            <button className="btn-cart" onClick={handleAddToCart}>Add to cart</button>
        </div>
    )
}

export default ItemCount