import { Link } from "react-router-dom";
import "./ProductItem.scss"

const ProductItem = ({key, id, img, price, rating,name}) => {
    return ( <article key={key}>
        <Link to={`/product-details/${id}`}>
        <img src={img} alt={name}/>
        <p>{rating}</p>
        <p>{name}</p>
        </Link>
        <div className="flex_pundbutton">
        <p>$ {price}</p>
        <button>+ für Warehinzufügen</button>
        </div>

    </article> );
}

export default ProductItem;