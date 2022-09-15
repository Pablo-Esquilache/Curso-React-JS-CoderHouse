import React, { useState } from "react";
import { useEffect } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(parseInt(initial));

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  useEffect(() => {
    setContador(parseInt(initial));
  }, [initial]);

  return (
    <div>
      <div style={{ padding: 10 }}>
        <button
          style={{ marginRight: 20 }}
          disabled={contador <= 1}
          onClick={restar}
        >
          -
        </button>
        <span>{contador}</span>
        <button
          style={{ marginLeft: 20 }}
          disabled={contador >= stock}
          onClick={sumar}
        >
          +
        </button>
      </div>
      <div>
        <button disabled={contador <= 0} onClick={() => onAdd(contador)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
