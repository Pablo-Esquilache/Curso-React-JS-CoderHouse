import ItemCount from "../../components/ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useState } from "react"


const Item = ({ img, price, modelo, marca, id }) => {
    const [irAlCarrito, setIrAlCarrito] = useState(false);

    const onAdd = () => {
        setIrAlCarrito(true);
    }
    return (
        <div style={{ border: '1px solid black', borderRadius: 5, margin: 10, padding: 5, width: 250, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={img} alt="" style={{ width: '50%', height: '50%' }} />
            <h4>{marca}</h4>
            <h6>{modelo}</h6>
            <h4>{price}</h4>
            {
                (irAlCarrito)
                    ? <Link to='/cart'><button>Terminar compra</button></Link>
                    : <ItemCount stock={10} initial={1} onAdd={onAdd} />
            }
            <Link to={`/item/${id}`}>Mas Detalles</Link>
        </div>
    )
}

export default Item