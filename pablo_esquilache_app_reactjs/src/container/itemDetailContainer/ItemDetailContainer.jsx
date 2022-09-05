import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [motos, setMotos] = useState([]);

    const ItemDetailPromise = async () => {
        const res = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=MotosYamaha');
        const data = await res.json();
        setMotos(data.results);
    }
    console.log(motos)
    useEffect(() => {
        ItemDetailPromise();
    }, []);

    const motosFind = motos.find(moto => moto.id === 'MLA1119794917')
    if (motosFind !== undefined) {
        return (
            <ItemDetail img={motosFind.thumbnail} title={motosFind.title} price={motosFind.price}/>
        )
    }
}

export default ItemDetailContainer;