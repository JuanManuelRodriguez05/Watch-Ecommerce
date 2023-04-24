import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget.jsx"
import "../../components/Header/NavBar.css"

const NavBar = () => {


    return (
        <div className="navBar">
            <div>
                <Link className="brand" to="/">
                    E-Watches
                </Link>

                <Link to="/cart">
                    <CartWidget />
                </Link>
            </div>

            <div className="nav_items">
                <NavLink to="/">INICIO</NavLink>
                <NavLink to="/categoria/reloj" >RELOJES</NavLink>
                <NavLink to="/categoria/smartwatch">SMARTWATCH</NavLink>
            </div>

        </div>
    )
}
export default NavBar