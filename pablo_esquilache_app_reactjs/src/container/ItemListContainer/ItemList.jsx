import { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = () => {
    const [motos, setMotos] = useState([])

    const ItemListApi = async () => {
        const res = await fetch('/BaseDatos/BaseDatos.json');
        const data = await res.json();
        setMotos(data.MotosVarias);
    }

    useEffect(() => {
        ItemListApi()
    }, [])

    return (
        <>
            {motos.map((moto, index) => (
                <Item key={index} img={moto.Imagen} marca={moto.Marca} modelo={moto.Modelo} price={moto.Precio} />
            ))}
        </>
    )
}


export default ItemList;