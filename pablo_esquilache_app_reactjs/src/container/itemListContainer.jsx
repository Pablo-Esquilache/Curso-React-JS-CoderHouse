import ItemList from './ItemListContainer/ItemList';

const ItemListContainer = (greeting) => {

    return (
        <>
            <div>
                <h1 style={{ textAlign: greeting.aling, color: greeting.color }}>{greeting.msj}</h1>
            </div>
            <div>
                <ItemList/>
            </div>
        </>
    )
}

export default ItemListContainer;