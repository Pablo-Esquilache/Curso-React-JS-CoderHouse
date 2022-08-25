import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);

    const sumar = () => {
        setContador(contador + 1);
    }

    const restar = () => {
        setContador(contador - 1);
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 400, border: '1px solid black' }}>
            <div>
                <h2>PRODUCTO</h2>
                <p>Precio $100</p>
                <p>Stock = {stock}</p>
            </div>
            <div style={{ padding: 10 }}>
                <button style={{ marginRight: 20 }} disabled={contador <= 1} onClick={restar}>-</button>
                <span>{contador}</span>
                <button style={{ marginLeft: 20 }} disabled={contador >= stock} onClick={sumar}>+</button>
            </div>
            <button disabled={contador >= stock} onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;