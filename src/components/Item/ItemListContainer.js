import "../Styles.css"
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
import useGetDocuments from '../../hooks/useGetDocuments';


function ItemListContainer() {
    const {zapatillas} = useGetDocuments("snekers")


    if (!zapatillas) {
        return <div>Cargando...</div>;
    }

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
                <Link to={`/catalogo/${zapatilla.id}`} className="btn btn-primary" >Ver más</Link>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}

export default ItemListContainer;
