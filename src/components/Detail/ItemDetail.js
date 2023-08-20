import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGetDocumentById from "../../hooks/useGetDocumentById";
import ItemQuantitySelector from "../ItemQuantitySelector";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const ItemDetail = () => {
    const { id } = useParams();
    const [cantidad, setCantidad] = useState(0)

    const {zapatilla} = useGetDocumentById("snekers", id)


    const AddZapatilla = async () => {
        const db = getFirestore();
        try {
            const ordenesRef = collection(db, "ordenes");
            const nuevaOrden = {
                cantidad: cantidad,
                marca: zapatilla.marca,
                color: zapatilla.color,
                precio: zapatilla.precio,
                nombre: zapatilla.nombre
            };
            const docRef = await addDoc(ordenesRef, nuevaOrden);
            console.log("se agrego al carrito", docRef);
        } catch (error) {
            console.error("Error al agregar al carrito:", error);
        }
    };

    const agregarZapatilla = () => {
        AddZapatilla();
    };

    if (!zapatilla) {
        return <div>Cargando...</div>;
    }


    return (
        <div className="zapatilla-detail-container">
            <h2>{zapatilla.nombre}</h2>
            <img className="img-zapas" src={zapatilla.imagen} alt={zapatilla.marca} />
            <p>Genero: {zapatilla.genero}</p>
            <p>Precio: {zapatilla.precio}</p>
            <p>Color: {zapatilla.color}</p>   
            <p>Material: {zapatilla.material}</p>
            <p>Marca: {zapatilla.marca}</p> 
            <ItemQuantitySelector cantidad={cantidad} setCantidad={setCantidad}/>
            <button onClick={agregarZapatilla}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemDetail;