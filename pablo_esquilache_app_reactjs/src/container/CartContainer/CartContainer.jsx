import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./itemCart";

const CartContainer = () => {
  const { carrito, precioTotal } = useCartContext();

  if (carrito.length === 0) {
    return (
      <>
        <p>No hay elementos...</p>
        <Link to="/">Ir al home</Link>
      </>
    );
  }
  return (
    <>
      {carrito.map((info) => (
        <ItemCart key={info.id} info={info} />
      ))}
      <p>Precio Total: {precioTotal()}</p>
      <Link to={"/checkout"}>Finalizar Compra</Link>
    </>
  );
};

export default CartContainer;
