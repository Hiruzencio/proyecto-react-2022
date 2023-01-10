import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagina404 from './components/404'
import Cuadricula from './components/Cuadricula'
import App from './components/App'
import Menu from './components/menu/Menu'
import './main.css'
import Home from './Home'
import CriptoDetail from './components/cripto/CriptoDetail'
import Perfil from './components/usuarios/Perfil'
import { UserContextProvider } from './contexts/UserContext'
import Login from './components/usuarios/Login'


ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route index element={<Home/>} />
                    <Route path='/perfil' element={<Perfil/>} />
                </Route>
                <Route path='/cryptocurrencies' element={<App/>}>
                    <Route index element={<Cuadricula/>} />
                    <Route path=':id' element={<CriptoDetail />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
)
