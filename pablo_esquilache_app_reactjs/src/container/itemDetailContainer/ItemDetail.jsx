import ItemCount from "../../components/ItemCount/ItemCount"

const ItemDetail = ({ img, title, price }) => {
    const onAdd = () => {
        console.log('Ud. ha añadido un producto al carrito')
    }
    return (
        <div style={{display: 'flex', flexDirection: 'row', margin: 10, width: 600, }}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%'}}>
                <img src={img} alt="" style={{ width: '100%', height: '100%' }} />
                <h4>${price}</h4>
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
            </div>
            <div style={{overflow:'auto', width: '50%'}}>
                <h6>{title}</h6>
            </div>
        </div>
    )
}


export default ItemDetail;