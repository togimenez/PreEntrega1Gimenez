import React from 'react'
import './StylesNavbar.css'
import Carwidget from './CarWidget'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
    <>
        <h1 className='titulo'>Snekers Fire</h1>
        <div className='contenedor-links'>
            <NavLink to="/" className="link">Inicio</NavLink>
            <NavLink to="/catalogo/Nike" className="link">Nike </NavLink>    
            <NavLink to="/catalogo/Adidas" className="link">Adidas </NavLink>   
            <NavLink to="/catalogo/Puma" className="link">Puma </NavLink> 
            <NavLink to="/catalogo/Reebok" className="link">Reebok </NavLink> 
        <Carwidget/>
        </div>
    </>
)
}

export default Navbar;



