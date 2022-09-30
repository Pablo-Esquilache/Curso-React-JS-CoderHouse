import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./itemCart";
import { useState } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";

const CartContainer = () => {
  const { carrito, precioTotal } = useCartContext();

  const [idCompra, setIdcompra] = useState();

  const orden = {
    comprador: {
      nombre: "Pablo Esquilache",
      email: "pablo@gmail.com",
      telefono: "2355456598",
      direccion: "Alsinla 456",
    },
    productos: carrito.map((producto) => ({
      id: producto.id,
      Marca: producto.marca,
      Modelo: producto.modelo,
      Precio: producto.precio,
    })),
    Total: precioTotal(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "ordenes");
    addDoc(ordersCollection, orden).then(({ id }) => setIdcompra(id));
  };

  if (idCompra !== undefined) {
    return (
      <>
        <p>Has realizado una comprado, y su numero de orden es {idCompra}</p>
        <Link to="/">Ir al home</Link>
      </>
    );
  } else {
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
        <button onClick={handleClick}>Finalizar compra</button>
      </>
    );
  }
};

export default CartContainer;
