import Item from "./Item";

const ItemList = ({ motos }) => {
  return motos.map((elem) => {
    return <Item info={elem} />;
  });
};

export default ItemList;
