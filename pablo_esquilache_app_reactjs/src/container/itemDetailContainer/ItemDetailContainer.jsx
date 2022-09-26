import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [motos, setMotos] = useState([]);

    const { idDetalle } = useParams()

    useEffect(() => {
        const querybd = getFirestore(); 
        const queryDoc = doc(querybd, 'productos', '7P6Xg1da8sTh4n33mA3w');
        getDoc(queryDoc)
        .then(res => console.log(res.data))
    },[]);

    // const ItemDetailPromise = async () => {
    //     const res = await fetch('/BaseDatos/BaseDatos.json');
    //     const data = await res.json();
    //     setMotos(data.MotosVarias.filter(moto => moto.id === parseInt(idDetalle)))
    // }

    // useEffect(() => {
    //         ItemDetailPromise();    
    // }, [idDetalle]);

    return (
        <>
            {motos.map((moto, index) => (
                <ItemDetail key={index} info={moto} />
            ))}
        </>
    )
}

export default ItemDetailContainer;