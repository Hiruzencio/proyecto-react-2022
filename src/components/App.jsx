import { Navigate, Outlet } from "react-router"
import Menu from "./menu/Menu"
import "./App.css"

const App = () => {

    if(!localStorage.getItem("tokenHiruzenMarket")) return <Navigate  to="/login"/>

    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}
export default App