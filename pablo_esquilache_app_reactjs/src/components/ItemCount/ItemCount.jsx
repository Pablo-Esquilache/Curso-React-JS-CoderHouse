import React, { useState } from "react";
import { useEffect } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(parseInt(initial));

  const sumar = () => {
    setCantidad(cantidad + 1);
  };

  const restar = () => {
    setCantidad(cantidad - 1);
  };

  useEffect(() => {
    setCantidad(parseInt(initial));
  }, [initial]);

  return (
    <div>
      <div style={{ padding: 10 }}>
        <button
          style={{ marginRight: 20 }}
          disabled={cantidad <= 1}
          onClick={restar}
        >
          -
        </button>
        <span>{cantidad}</span>
        <button
          style={{ marginLeft: 20 }}
          disabled={cantidad >= stock}
          onClick={sumar}
        >
          +
        </button>
      </div>
      <div>
        <button disabled={cantidad <= 0} onClick={() => onAdd(cantidad)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
