import { Link } from "react-router-dom";
import ProductDetails from "../productdetails/ProductDetails";
import "./ProductItem.scss"

const ProductItem = ({ id, img, price, rating,name}) => {
    return ( <article>
        <Link to={`/product-details/${id}`}>
        <img src={img} alt={name}/>
        <p>{rating}</p>
        <p>{name}</p>
        <div className="flex_pundbutton">
        <p>$ {price}</p>
        <button>+ für Warehinzufügen</button>
        </div>
        </Link>

    </article> );
}
 
export default ProductItem;