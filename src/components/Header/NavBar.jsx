import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget.jsx"
import "../../components/Header/NavBar.css"

const categoria = [
    { id: "1", categoria: "watch", name: "WATCH" },
    { id: "2", categoria: "smartwatch", name: "SMARTWATCH" }
]

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
                {categoria.map(categoria => <NavLink key={categoria.id} to={`/categoria/${categoria.categoria}`}>{categoria.name} </NavLink>)}
            </div>

        </div>
    )
}
export default NavBar