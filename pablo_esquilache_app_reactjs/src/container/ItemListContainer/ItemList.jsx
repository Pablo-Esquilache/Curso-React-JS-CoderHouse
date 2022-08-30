import { useEffect, useState } from "react";
import Item from "./Item";


const ItemList = () => {
    const [motos, setMotos] = useState([])

    // const dataMotos = async () => {
    //     const response = await fetch('./datos.json')
    //     const data = await response.json();
    //     setMotos(data.results);

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=MotosYamaha')
            .then(resp => resp.json())
            .then(data => { setMotos(data.results); }
            )

    }, [])

    return (
        <>
            {motos.map((moto, index) => {
                return (
                    <Item key={index} img={moto.thumbnail} title={moto.title} price={moto.price} />
                )
            })}
        </>
    )
}


export default ItemList;