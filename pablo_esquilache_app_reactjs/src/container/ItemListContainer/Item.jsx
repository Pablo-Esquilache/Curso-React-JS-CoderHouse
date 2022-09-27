import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ info }) => {
  return (
    <div key={info.index} className="item-container">
      <Link to={`/item/${info.id}`}>
        <div className="item-card">
          <img src={info.img} alt="" />
          <h4>{info.marca}</h4>
          <h6>{info.modelo}</h6>
          <h4>${info.price}</h4>
        </div>
      </Link>
    </div>
  );
};

export default Item;
