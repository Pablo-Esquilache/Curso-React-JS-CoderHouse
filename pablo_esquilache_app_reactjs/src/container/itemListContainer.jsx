
import ItemCount from '../components/ItemCount/ItemCount';

const ItemListContainer = (greeting) => {
    const onAdd = () => {
        console.log('Ud. ha añadido un producto al carrito')
    }
    return (
        <>
            <div>
                <h1 style={{ textAlign: greeting.aling, color: greeting.color }}>{greeting.msj}</h1>
            </div>
            <div>
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
            </div>
        </>
    )
}

export default ItemListContainer;