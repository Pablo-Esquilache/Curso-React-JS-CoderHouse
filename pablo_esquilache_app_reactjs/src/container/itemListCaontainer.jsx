const ItemListContainer = (greeting) => {
    return (
        <h1 style={{textAlign: greeting.aling, color: greeting.color}}>{greeting.msj}</h1>
    )
}

export default ItemListContainer;