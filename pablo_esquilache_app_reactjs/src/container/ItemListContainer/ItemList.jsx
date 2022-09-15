import { useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemList = () => {
    const [motos, setMotos] = useState([])
    const {idMarca} = useParams();

    const ItemListApi = async () => {
        const res = await fetch('/BaseDatos/BaseDatos.json');
        const data = await res.json();
        if (idMarca) { setMotos(data.MotosVarias.filter(moto => moto.Marca === idMarca)) }
        else { setMotos(data.MotosVarias) }
    }

    useEffect(() => {
        ItemListApi()
    }, [idMarca])

    return (
        <>
            {motos.map((moto, index) => (
                <Item key={index} id={moto.id} img={moto.Imagen} marca={moto.Marca} modelo={moto.Modelo} price={moto.Precio} />
            ))}
        </>
    )
}


export default ItemList;