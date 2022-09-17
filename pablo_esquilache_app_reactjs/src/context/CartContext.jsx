import React, { useContext, useState } from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
  const [carrito, setCarrito] = useState([]);

  const limpiarCarrito = () => setCarrito([]);

  const enCarrito = (id) =>
    carrito.find((producto) => producto.id === id) ? true : false;

  const eliminarProducto = (id) =>
    setCarrito(carrito.filter((producto) => producto.id !== id));

  const agregarProducto = (info, contador) => {
    let newCarrito;
    let producto = carrito.find((producto) => producto.id === info.ID);
    if (producto) {
      producto.cantidad += contador;
      newCarrito = { ...carrito };
    } else {
      producto = { ...info, cantidad: contador };
      newCarrito = { ...info, producto };
    }
    setCarrito(newCarrito);
  };

  console.log(carrito);

  return (
    <CartContext.Provider value={{limpiarCarrito, enCarrito, eliminarProducto, agregarProducto}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
