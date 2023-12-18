import { useContext } from "react";
import { Products } from "./../../context/Context";
import { Link, useParams } from "react-router-dom";
import Star from './../svg/Star';
import LeftArrow from "../svg/LeftArrow";




const ProductDetails = () => {
    const context = useContext(Products);

    const path = useParams();
    const completePath = path.id;

    const productArr = [...context.products];

    const filteredProductDetail = productArr.filter((singleProductObj) => {
        return singleProductObj.id.toString() === completePath.toString();
    })

    const navigateToPreviousPage = () => {
        
    }

    return ( 
        <>
            {filteredProductDetail.map((product, index) => (
                <article key={index}>
                    <div>
                        <div className="leftArrow_wrap" onClick={navigateToPreviousPage}> <LeftArrow /> </div>
                        <h2>{product.title}</h2>
                    </div>
                    
                    <div>
                        <img src={product.thumbnail} alt={product.title} />
                        <article>
                            <div>
                                <h3>{product.title}</h3>
                                <div className="quantityCounter_wrap">
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                            </div>
                            <p> <Star /> {product.rating}</p>
                            <div>
                                <p>{product.stock} pieces in stock</p>
                                <h4>${product.price}</h4>
                            </div>
                        </article>
                    </div>
                    <h2>Description</h2>
                    <p>{product.description}</p>
                    <button>Add to Cart</button>
                </article>
            ))}
        </> 
    );
}
 
export default ProductDetails;