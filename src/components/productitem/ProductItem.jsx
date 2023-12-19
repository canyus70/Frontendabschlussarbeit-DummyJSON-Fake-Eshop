import { Link } from "react-router-dom";
import "./ProductItem.scss"

const ProductItem = ({ id, image, price, rating,title}) => {
    return ( <article>
        <Link to={`/product-details/${id}`}>
        <img src={image} alt={title}/>
        <p>{rating}</p>
        <p>{title}</p>
        </Link>
        <div className="flex_pundbutton">
        <p>$ {price}</p>
        <button>+ für Warehinzufügen</button>
        </div>

    </article> );
}

export default ProductItem;