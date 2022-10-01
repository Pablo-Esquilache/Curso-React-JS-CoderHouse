import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ info }) => {
  const { eliminarProducto } = useCartContext();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <img style={{ width: 100 }} src={info.imagen} alt="" />
      <p>{info.marca}</p>
      <p>{info.modelo}</p>
      <p>Precio Unitario: ${info.precio}</p>
      <p>Unidades: {info.cantidad}</p>
      <p>Subtotal: ${info.cantidad * info.precio}</p>
      <button onClick={() => eliminarProducto(info.id)}>eliminar</button>
    </div>
  );
};

export default ItemCart;
