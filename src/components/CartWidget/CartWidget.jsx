import Cart from "../../../public/img/CartWidget.png"
import "../../components/CartWidget/CartWidget.css"
import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {
    const {cartList, getTotalProduct } = useCartContext()
    const totalProduct = getTotalProduct(cartList)
    return (
        <div className="cartWidget"> 
        <><img className="Cart" src={Cart} alt="Cart logo" />
        <span className="cartNumber"> {totalProduct} </span></>
        </div>
    )
}

export default CartWidget
