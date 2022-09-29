import Item from "./Item";

const ItemList = ({ motos }) => {
  return motos.map((elem) => {
    return <Item key={elem.id} info={elem} />;
  });
};

export default ItemList;
