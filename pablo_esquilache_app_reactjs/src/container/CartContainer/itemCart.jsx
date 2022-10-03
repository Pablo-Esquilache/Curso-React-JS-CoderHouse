import { useCartContext } from "../../context/CartContext";
import "./itemCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash  } from "@fortawesome/free-solid-svg-icons";

const ItemCart = ({ info }) => {
  const { eliminarProducto } = useCartContext();

  return (
      <div className="itemCart">
        <img src={info.imagen} alt="" />
        <p>Marca: {info.marca}</p>
        <p>Modelo: {info.modelo}</p>
        <p>Precio Unitario: ${info.precio}</p>
        <p>Unidades: {info.cantidad}</p>
        <p>Subtotal: ${info.cantidad * info.precio}</p>
        <button onClick={() => eliminarProducto(info.id)}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
  );
};

export default ItemCart;
