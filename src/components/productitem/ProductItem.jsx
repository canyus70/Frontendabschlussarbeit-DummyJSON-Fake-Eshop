import { Link } from "react-router-dom";
import "./ProductItem.scss"
import Star from './../svg/Star'

const ProductItem = ({ id, image, price, rating,title}) => {
    return ( <article className="singleProduct_wrap_productitem">
        <Link to={`/product-details/${id}`}>
        <img src={image} alt={title}/>
        <p className="rating_productitem"> <Star /> {rating}</p>
        <h3 className="productTitle_productitem">{title}</h3>
        </Link>
        <div className="flex_pundbutton">
        <h4>$ {price}</h4>
        <button className="addToCart_productitem">+ </button>
        </div>

    </article> );
}

export default ProductItem;