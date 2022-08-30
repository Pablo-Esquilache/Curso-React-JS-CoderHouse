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
        <div>
            <div style={{ padding: 10 }}>
                <button style={{ marginRight: 20 }} disabled={contador <= 1} onClick={restar}>-</button>
                <span>{contador}</span>
                <button style={{ marginLeft: 20 }} disabled={contador >= stock} onClick={sumar}>+</button>
            </div>
            <div>
                <button onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;