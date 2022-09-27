import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [motos, setMotos] = useState([]);

  const { idDetalle } = useParams();

  useEffect(() => {
    const querybd = getFirestore();
    const queryDoc = doc(querybd, 'productos', idDetalle);
    getDoc(queryDoc).then(res => setMotos({ id: res.id, ...res.data() }));
  }, [idDetalle]);

  return <ItemDetail info={motos} />;
};

export default ItemDetailContainer;
