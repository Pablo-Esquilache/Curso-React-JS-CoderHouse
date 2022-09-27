import { useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemList = () => {
  const [motos, setMotos] = useState([]);

  const { idMarca } = useParams();

  useEffect(() => {
    const querybd = getFirestore();
    const queryCollection = collection(querybd, 'productos');
    if (idMarca) {
      const queryMarca = query(queryCollection, where("marca", "==", idMarca))
      getDocs(queryMarca)
      .then(res => setMotos(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
    } else {
        getDocs(queryCollection)
        .then(res => setMotos(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
    }
  }, [idMarca]);

  return <Item info={motos} />;
};

export default ItemList;
