import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ info }) => {
  const { eliminarProducto } = useCartContext();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <img style={{ width: 100 }} src={info.Imagen} alt="" />
      <p>{info.Marca}</p>
      <p>{info.Modelo}</p>
      <p>Precio Unitario: ${info.Precio}</p>
      <p>{info.cantidad}</p>
      <p>Subtotal: ${info.cantidad * info.Precio}</p>
      <button onClick={() => eliminarProducto(info.id)}>eliminar</button>
    </div>
  );
};

export default ItemCart;
