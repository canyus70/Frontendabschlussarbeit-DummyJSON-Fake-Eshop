import { Link } from "react-router-dom";
import "./ProductItem.scss"

import Star from './../svg/Star'

import Plus2 from "../svg/Plus2";


const ProductItem = ({ id, image, price, rating,title}) => {
    return ( <article className="singleProduct_wrap_productitem">
        <Link to={`/product-details/${id}`}>
        <img src={image} alt={title}/>
        <p className="rating_productitem"> <Star /> {rating}</p>
        <h3 className="productTitle_productitem">{title}</h3>
        </Link>
        <div className="flex_pundbutton">


        <p>$ {price}</p>
        <button><Plus2/> </button>

        </div>

    </article> );
}

export default ProductItem;