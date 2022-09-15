import React, { useContext, useState } from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({Children}) => {
  const [carrito, setCarrito] = useState([]);

  const limpiarCarrito = () => setCarrito([]);

  const enCarrito = (id) =>
    carrito.find((producto) => producto.id === id) ? true : false;

  const eliminarProducto = (id) =>
    setCarrito(carrito.filter((producto) => producto.id === !id));

  const agregarProducto = (item, cantidad) => {
    let newCarrito;
    let producto = carrito.find((producto) => producto.id === item.id);
    if (producto) {
      producto.cantidad += cantidad;
      newCarrito = { ...carrito };
    } else {
      producto = { ...item, cantidad: cantidad };
      newCarrito = { ...item, producto };
    }
    setCarrito(newCarrito);
  };

  console.log(carrito);
  
  return (
    <CartContext.Provider value={{limpiarCarrito, enCarrito, eliminarProducto, agregarProducto}}>
      {Children}
    </CartContext.Provider>
  );
};

export default CartProvider;
