// import React, { useEffect, useState } from 'react';
// import InfoZapas from './Item/ItemList';
// import "./Styles.css"
// import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
// import { NavLink, useParams } from 'react-router-dom'

// function Catalogo() {
//     const {marca} = useParams()
    

//     return (
//         <div>
//         <div className="contenedor-snekers">
//             {zapatillas.map((zapatilla) => (
//             <div key={zapatilla.id} className="card" style={{ width: '20rem' }}>
//                 <img src={zapatilla.imagen} className="card-img-top" alt={`foto de ${zapatilla.nombre}`} />
//                 <div className="card-body">
//                 <h5 className="card-title">{zapatilla.nombre}</h5>
//                 <p className="card-text">
//                     Marca: {zapatilla.marca}/ Color: {zapatilla.color}
//                     Género: {zapatilla.genero} / Material: {zapatilla.material}
//                 </p>
//                 <NavLink to="/informacion" className="btn btn-primary">
//                     Agregar al carrito
//                 </NavLink>
//                 </div>
//             </div>
//             ))}
//         </div>
//         </div>
//     );
// }

// export default Catalogo;