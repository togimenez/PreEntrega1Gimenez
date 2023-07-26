import React from 'react'
import './StylesNavbar.css'
import MyComponent from './CarWidget'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
    <>
        <h1 className='titulo'>Comidas Rapidas</h1>
        <div className='links'>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/informacion">Mas Info</NavLink>
        </div>
        <MyComponent/>
    </>
)
}

export default Navbar;



