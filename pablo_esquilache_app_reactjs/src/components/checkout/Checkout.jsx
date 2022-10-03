import { useState } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './checkout.css'

const Checkout = () => {
  const { carrito, precioTotal } = useCartContext();

  const { limpiarCarrito } = useCartContext();

  const [idCompra, setIdcompra] = useState();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  const changeHandler = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(newForm);
  };

  const orden = {
    comprador: {
      nombre: form.nombre,
      email: form.email,
      telefono: form.telefono,
      direccion: form.direccion,
    },
    productos: carrito.map((producto) => ({
      id: producto.id,
      Marca: producto.marca,
      Modelo: producto.modelo,
      Precio: producto.precio,
      Cantidad: producto.cantidad,
    })),
    Total: precioTotal(),
  };

  const handleClick = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const ordersCollection = collection(db, "ordenes");
    addDoc(ordersCollection, orden).then(({ id }) => setIdcompra(id));
  };

  return (
    <div className="checkoutContainer">
      {typeof idCompra !== "undefined" ? (
        <div className="checkoutMsj">
          <p>
            Has realizado una compra, y su numero de orden es <b>{idCompra}</b>
          </p>
          <button>
            <Link to="/">Ir al Home</Link>
          </button>
        </div>
      ) : (
        <form onSubmit={handleClick}>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              onChange={changeHandler}
              value={form.nombre}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={changeHandler}
              value={form.email}
            />
          </div>
          <div>
            <label htmlFor="telefono">Telefono</label>
            <input
              type="text"
              name="telefono"
              id="telefono"
              onChange={changeHandler}
              value={form.telefono}
            />
          </div>
          <div>
            <label htmlFor="direccion">Direccion</label>
            <input
              type="text"
              name="direccion"
              id="direccion"
              onChange={changeHandler}
              value={form.direccion}
            />
          </div>
          <div>
            <button onClick={() => limpiarCarrito()}>Comprar!</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
