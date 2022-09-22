import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [motos, setMotos] = useState([]);

    const { idDetalle } = useParams()

    const ItemDetailPromise = async () => {
        const res = await fetch('/BaseDatos/BaseDatos.json');
        const data = await res.json();
        setMotos(data.MotosVarias.filter(moto => moto.id === parseInt(idDetalle)))
    }

    useEffect(() => {
        setTimeout(() => {
            ItemDetailPromise();
        }, 1000);
    }, [idDetalle]);

    return (
        <>
            {motos.map((moto, index) => (
                <ItemDetail key={index} info={moto} />
            ))}
        </>
    )
}

export default ItemDetailContainer;