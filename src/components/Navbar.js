import React from 'react'
import './Navbar.css'
import MyComponent from './CarWidget'


function Navbar() {
    return (
        <body>
            <header>
                <h1 className='titulo'>Comidas Rapidas</h1>
                <div className='contenedor-links'>
                    <a className='links' href='/'>Inicio</a>
                    <a className='links' href='/'>Menu</a>
                    <a className='links' href='/'>Sucursales</a>
                    <a className='links' href='/'>Soporte</a>
                </div>
                <MyComponent/>
            </header>
        </body>
    )
}

export default Navbar



