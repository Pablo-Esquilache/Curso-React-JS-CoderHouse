import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [motos, setMotos] = useState([]);

  const { iddetalle } = useParams();

  useEffect(() => {
    const querybd = getFirestore();
    const queryDoc = doc(querybd, "productos", iddetalle);
    getDoc(queryDoc).then((res) => setMotos({ id: res.id, ...res.data() }));
  }, [iddetalle]);

  return <ItemDetail info={motos} />;
};

export default ItemDetailContainer;
