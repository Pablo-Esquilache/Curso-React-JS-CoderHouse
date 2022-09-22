import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalProductos } = useCartContext();

  return (
    <>
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
        <span>{totalProductos() || ""}</span>
      </Link>
    </>
  );
};

export default CartWidget;
