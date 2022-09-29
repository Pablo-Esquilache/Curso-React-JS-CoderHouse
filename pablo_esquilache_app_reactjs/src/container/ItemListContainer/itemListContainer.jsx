import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [motos, setMotos] = useState([]);

  const { idMarca } = useParams();

  useEffect(() => {
    const querybd = getFirestore();
    const queryCollection = collection(querybd, "productos");
    if (idMarca) {
      const queryMarca = query(queryCollection, where("marca", "==", idMarca));
      getDocs(queryMarca).then((res) =>
        setMotos(
          res.docs.map((productos) => ({
            id: productos.id,
            ...productos.data(),
          }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setMotos(
          res.docs.map((productos) => ({
            id: productos.id,
            ...productos.data(),
          }))
        )
      );
    }
  }, [idMarca]);

  return (
    <>
      <div className="ItemList-Titulo">
        <h1>Motos P.D.E</h1>
      </div>
      <div className="itemList-container">
        <ItemList motos={motos} />
      </div>
    </>
  );
};

export default ItemListContainer;
