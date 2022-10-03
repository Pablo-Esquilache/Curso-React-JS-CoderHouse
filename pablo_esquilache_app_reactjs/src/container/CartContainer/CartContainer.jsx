import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./itemCart";
import "./CartContainer.css";

const CartContainer = () => {
  const { carrito, precioTotal } = useCartContext();

  return (
    <div className="itemCartContainer">
      {carrito.length === 0 ? (
        <div className="containerVacio">
          <p>No hay elementos...</p>
          <Link to="/">Ir al home</Link>
        </div>
      ) : (
        <div className="containerLleno">
          {carrito.map((info) => (
            <ItemCart key={info.id} info={info} />
          ))}
          <p>Precio Total: {precioTotal()}</p>
          <button>
            <Link to={"/checkout"}>Finalizar Compra</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
