import axios, { Axios } from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router"
import "./Login.css"

const Login = () => {

    const navigation = useNavigate()

    const REQRES_URL = import.meta.env.VITE_REQRES_URL
    const [ user,setUser ] = useState({
        email:"",
        password:""
    })

    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState()

    const submit = (e) => {
        e.preventDefault();
        setCargando(true)
        setError(null)
        axios.post(`${REQRES_URL}login`, user)
        .then(data => {
            setCargando(false)
            localStorage.setItem("tokenHiruzenMarket", data.data.token)
            navigation("/")
        })
        .catch(e => {
            setCargando(false)
            setError(e.response.data.error)
            console.error(e)
        })
    }

    if(localStorage.getItem("tokenHiruzenMarket")) return <Navigate  to="/"/>


    return (
        <div className="login-container">
            <h1>Iniciar sesión</h1>
            <form onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo</label>
                    <input onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }} type="email" name="email"/>
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }} type="password" name="password"/>
                </div>
                <div className="submit">
                    <input type="submit" value={cargando ? "Loading":"Login"} className="link"/>
                </div>
            </form>
            {
                error && <span className="error"> {error} </span>
            }
         
        </div>
    )
}
export default Login