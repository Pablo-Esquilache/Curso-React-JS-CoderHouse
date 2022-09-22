import ItemList from './ItemList';
import './ItemListContainer.css'

const ItemListContainer = () => {

    return (
        <>
            <div className='ItemList-Titulo'>
                <h1>Motos P.D.E</h1>
            </div>
            <div  className="itemList-container">
                <ItemList />
            </div>
        </>
    )
}

export default ItemListContainer;