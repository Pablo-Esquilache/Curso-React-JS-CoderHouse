import { useEffect, useState } from "react";
import Item from "./Item";


const ItemList = () => {
    const [motos, setMotos] = useState([])
    useEffect(() => {
        setTimeout(() => fetch('https://api.mercadolibre.com/sites/MLA/search?q=MotosYamaha')
            .then(resp => resp.json())
            .then(data => { setMotos(data.results); }
            ), 2000);


    }, [])

    return (
        <>
            {motos.map((moto, index, price) => {
                return (
                    <Item key={index} img={moto.thumbnail} title={moto.title} price={moto.price} />
                )
            })}
        </>
    )
}


export default ItemList;