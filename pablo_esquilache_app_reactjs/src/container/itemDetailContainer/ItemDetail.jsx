import ItemCount from "../../components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ info }) => {
  const [irAlCarrito, setIrAlCarrito] = useState(false);

  const { agregarProducto } = useCartContext();

  const onAdd = (cantidad) => {
    setIrAlCarrito(true);
    agregarProducto(info, cantidad);
  };

  return (
    <div key={info.index} className="itemDetail-container">
      <div className="itemDetail-card">
        <h3>
          {info.marca} {info.modelo}
        </h3>
        <img src={info.imagen} alt="" />
        <h4>${info.precio}</h4>
        {irAlCarrito ? (
          <Link to="/cart">
            <button>Iniciar Compra</button>
          </Link>
        ) : (
          <ItemCount stock={10} initial={1} onAdd={onAdd} />
        )}
      </div>
      <div className="itemDetail-detalle">
        <p>{info.detalle}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
