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
        }, 2000);
    }, [idDetalle]);

    return (
        <>
            {motos.map((moto, index) => (
                <ItemDetail key={index} info={moto} />
                // <ItemDetail detalle={moto.Detalle} key={index} id={moto.id} img={moto.Imagen} marca={moto.Marca} modelo={moto.Modelo} price={moto.Precio} />
            ))}
        </>
    )
}

export default ItemDetailContainer;