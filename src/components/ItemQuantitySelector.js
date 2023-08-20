import React, { useState } from "react";

const ItemQuantitySelector = ({cantidad, setCantidad}) => {

    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const disminuirCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className="quantity-selector">
            <button onClick={disminuirCantidad}>-</button>
            <span>{cantidad}</span>
            <button onClick={aumentarCantidad}>+</button>
        </div>
    );
};

export default ItemQuantitySelector;
