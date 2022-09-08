import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [motos, setMotos] = useState([]);

    const ItemDetailPromise = async () => {
        const res = await fetch('/BaseDatos/BaseDatos.json');
        const data = await res.json();
        setMotos(data.MotosVarias);
    }
    useEffect(() => {
        ItemDetailPromise();
    }, []);

    const motosFind = motos.find(moto => moto.id === 1)
    if (motosFind !== undefined) {
        return (
            <ItemDetail detalle={motosFind.Detalle} img={motosFind.Imagen} marca={motosFind.Marca} modelo={motosFind.Modelo} price={motosFind.Precio}/>
        )
    }
}

export default ItemDetailContainer;