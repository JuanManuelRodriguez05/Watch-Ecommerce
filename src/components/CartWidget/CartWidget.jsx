import Cart from "../../../public/img/CartWidget.png"
import "../../components/CartWidget/CartWidget.css"

const CartWidget = () => {
    return (
        <div className="cartWidget"> 
        <><img className="Cart" src={Cart} alt="Cart logo" />
        <span className="cartNumber"> 0 </span></>
        </div>
    )
}

export default CartWidget
