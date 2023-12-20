import { useContext, useState } from "react";
import { Products } from "./../../context/Context";
import { Link, useParams, useNavigate } from "react-router-dom";
import Star from './../svg/Star';
import LeftArrow from "../svg/LeftArrow";
import Heart from './../svg/Heart';
import './ProductDetails.scss'
import Plus from "../svg/Plus";
import Navbar from "../navbar/Navbar";
import HeartFilled from "../svg/HeartFilled";

const ProductDetails = () => {
    const [count, setCount] = useState(1);
    const [favoriteSelected, setFavoriteSelected] = useState(false);

    const { products, favorites, setFavorites, warenkorb, setWarenkorb } = useContext(Products);

    const path = useParams();
    const completePath = path.id;

    // Variable definiert für den LeftArrow, um bei onClick auf die previous Page weitergeleitet zu werden:
    const navigate = useNavigate();

    // Array Kopie aller Products, um in Filterfunktion das passende Produkt rendern zu können:
    const productArr = [...products];

    const filteredProductDetail = productArr.filter((singleProductObj) => {
        return singleProductObj.id.toString() === completePath.toString();
    })

    // onClick funktions für den Counter, wie viele Produkte in den Warenkorb sollen:
    const plusOne = () => {
        setCount(count + 1)
    }

    const minusOne = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    const addToFavorites = (object) => {
        setFavoriteSelected(!favoriteSelected);
        setFavorites([...favorites, object])
    }

    const addToCart = (object) => {
		setWarenkorb([...warenkorb, object] )
	}
 

    return ( 
        <>
            {filteredProductDetail.map((product, index) => (
                <article key={index} className="detailPage_wrap">
                    <div className="header_wrap_details">
                        <div className="leftArrow_wrap_details" onClick={() => navigate(-1)}> <LeftArrow /> </div>
                        <h2 className="headerTitle_details">{product.title}</h2>
                        <div className="heart_wrap_details" onClick={() => addToFavorites(product)}> {favoriteSelected ? <HeartFilled /> : <Heart />} </div>
                    </div>
                    
                    <div className="detailCard_wrap_details">
                        <img src={product.thumbnail} alt={product.title} />
                        <article className="info_wrap_details">
                            <div className="firstFlex_wrap_details">
                                <h2>{product.title}</h2>
                                <div className="quantityCounter_wrap_details">
                                    <button onClick={minusOne}>-</button>
                                    <p>{count}</p>
                                    <button onClick={plusOne}>+</button>
                                </div>
                            </div>
                            <p className="rating_details"> <Star /> {product.rating}</p>
                            <div className="secondFlex_wrap_details">
                                <p>{product.stock} pieces in stock</p>
                                <h4>$ {product.price}.00</h4>
                            </div>
                        </article>
                    </div>
                    <h2 className="descriptionHeadline_details">Description</h2>
                    <p className="description_details">{product.description}</p>
                    <button className="addToCart" onClick={() => addToCart(product)}>Add to Cart</button>
                </article>
            ))}
            <Navbar/>
        </> 
    );
}
 
export default ProductDetails;