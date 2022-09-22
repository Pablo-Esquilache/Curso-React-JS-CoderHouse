import { Link } from "react-router-dom";
import './Item.css'

const Item = ({ img, price, modelo, marca, id }) => {
  return (
    <div className="item-container">
    <Link to={`/item/${id}`}>
      <div className="item-card">
        <img src={img} alt=""/>
        <h4>{marca}</h4>
        <h6>{modelo}</h6>
        <h4>${price}</h4>
      </div>
    </Link>
    </div>
  );
};

export default Item;
