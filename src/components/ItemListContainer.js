import React, { useEffect, useState } from 'react';
import InfoZapas from './InfoZapas';
import "./StylesNavbar.css"
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import { NavLink, useParams } from 'react-router-dom'

function ItemListContainer() {
    const [zapatillas, setZapatillas] = useState([]);
    const {CatalogoId} = useParams()

    const obtenerDatosZapas = () => {
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve(InfoZapas);
        }, 400);
        });
    };

    useEffect(() => {
        obtenerDatosZapas()
            .then((datos) => { 
                if (CatalogoId) {
                    const datosFiltrados = datos.filter(zapatilla => zapatilla.marca === CatalogoId);
                    setZapatillas(datosFiltrados)
                } else {
                    setZapatillas(datos)
                }
            })
    }, [CatalogoId]);

    return (
        <div>
        <div className="contenedor-snekers">
            {zapatillas.map((zapatilla) => (
            <div key={zapatilla.id} className="card" style={{ width: '20rem' }}>
                <img src={zapatilla.imagen} className="card-img-top" alt={`foto de ${zapatilla.nombre}`} />
                <div className="card-body">
                <h5 className="card-title">{zapatilla.nombre}</h5>
                <p className="card-text">
                    Marca: {zapatilla.marca}/ Color: {zapatilla.color}
                    Género: {zapatilla.genero} / Material: {zapatilla.material}
                </p>
                <NavLink to="/informacion" className="btn btn-primary">
                    Agregar al carrito
                </NavLink>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}

export default ItemListContainer;
