import ItemCount from "../../components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import './ItemDetail.css'

const ItemDetail = ({info}) => {
  const [irAlCarrito, setIrAlCarrito] = useState(false);

  const { agregarProducto } = useCartContext();

  const onAdd = (cantidad) => {
    setIrAlCarrito(true);
    agregarProducto(info, cantidad);
  };

  return (
    <div className="itemDetail-container">
      <div className="itemDetail-card">
        <h3>
          {info.Marca} {info.Modelo}
        </h3>
        <img src={info.Imagen} alt=""/>
        <h4>${info.Precio}</h4>
        {irAlCarrito ? (
          <Link to="/cart">
            <button>Terminar compra</button>
          </Link>
        ) : (
          <ItemCount stock={10} initial={1} onAdd={onAdd} />
        )}
      </div>
      <div className="itemDetail-detalle">
        <p>{info.Detalle}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
