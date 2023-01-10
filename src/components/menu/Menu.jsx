import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import "./Menu.css"

const Menu = () => {

    const usuario = useContext(UserContext)
    const navigation = useNavigate()
    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/cryptocurrencies">Cripto List</NavLink></li>
                <li><NavLink to="/perfil">Perfil de {usuario.name}</NavLink></li>
                <li><a onClick={() => {
                    localStorage.removeItem("tokenHiruzenMarket");
                    navigation("/login");
                }}>Cerrar Sesión</a></li>
            </ul>
        </nav>
    )
}
export default Menu
