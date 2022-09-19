import ItemCount from "../../components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";

//({ img, marca, modelo, price, detalle })
const ItemDetail = ({info}) => {
  const [irAlCarrito, setIrAlCarrito] = useState(false);

  const { agregarProducto } = useCartContext();

  const onAdd = (cantidad) => {
    setIrAlCarrito(true);
    agregarProducto(info, cantidad);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "row", margin: 10, width: 600 }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
        }}
      >
        <h3>
          {info.Marca} {info.Modelo}
        </h3>
        <img src={info.Imagen} alt="" style={{ width: "100%", height: "100%" }} />
        <h4>{info.Precio}</h4>
        {irAlCarrito ? (
          <Link to="/cart">
            <button>Terminar compra</button>
          </Link>
        ) : (
          <ItemCount stock={10} initial={1} onAdd={onAdd} />
        )}
      </div>
      <div style={{ overflow: "auto", width: "50%" }}>
        <h6>{info.Detalle}</h6>
      </div>
    </div>
  );
};

export default ItemDetail;
