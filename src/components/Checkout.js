import { useEffect, useState } from "react";
import useGetDocuments from "../hooks/useGetDocuments";
import './Styles.css'

const Checkout = () => {
    const {zapatillas} = useGetDocuments("ordenes")
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalPrice = 0;
        zapatillas.forEach((order) => {
            totalPrice += order.precio * order.cantidad;
        });
        setTotal(totalPrice);
    }, [zapatillas]);
    
    return (
        <div className="contenedor-checkout">
            <h2>Resumen de Compra</h2>
            <div className="order">
                {zapatillas.map((order, index) => (
                    <div key={index}>
                        <h3>Producto {index + 1}</h3>
                        <p>Marca: {order.marca}</p>
                        <p>Color: {order.color}</p>
                        <p>Cantidad: {order.cantidad}</p>
                        <p>Precio Unitario: ${order.precio}</p>
                        <p>Total por Producto: ${order.precio * order.cantidad}</p>
                    </div>
                ))}
            </div>
            <p>Total de Compra: ${total}</p>
        </div>
    );
};

export default Checkout;