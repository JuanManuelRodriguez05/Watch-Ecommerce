import Cart from "../../assets/img/CartWidget.png"
import "../../App.css"

const CartWidget = () => {
    return (
        <div className="cartWidget"> 
        <><a href=""><img className="Cart" src={Cart} alt="Cart logo" /></a>
        <span className="cartNumber"> 0 </span></>
        </div>
    )
}

export default CartWidget
