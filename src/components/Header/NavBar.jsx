import CartWidget from "../CartWidget/CartWidget.jsx"
import "../../App.css"

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="nav_logo">E-Watches <CartWidget /> </div>
            <div className="nav_items">
                <a href="">Inicio</a>
                <a href="">Galeria</a>
                <a href="">Acerca de nosotros</a>
                <a href="">Contacto</a>
            </div>

        </div>
    )
}
export default NavBar