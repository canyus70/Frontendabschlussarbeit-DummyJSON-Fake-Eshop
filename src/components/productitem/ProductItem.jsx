import { Link } from "react-router-dom";
import "./ProductItem.scss"

const ProductItem = ({ id, img, price, rating,name}) => {
    return ( <article>
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