import { useContext, useEffect, useState } from "react";
import { Products } from "./../../context/Context";
import { Link, useParams, useNavigate } from "react-router-dom";
import Star from './../svg/Star';
import LeftArrow from "../svg/LeftArrow";
import Heart from './../svg/Heart';
import Plus from "../svg/Plus";
import Navbar from "../navbar/Navbar";
import HeartFilled from "../svg/HeartFilled";
import "./CartItem.scss"



const CartItem = ({product, counter, id}) => {

    const [count, setCount] = useState(counter)
    const [index, setIndex] = useState(null)
   
    const [favoriteSelected, setFavoriteSelected] = useState(false);

    const { products, favorites, setFavorites, warenkorb, setWarenkorb } = useContext(Products);

    // Variable definiert für den LeftArrow, um bei onClick auf die previous Page weitergeleitet zu werden:
    const navigate = useNavigate();

    // Array Kopie aller Products, um in Filterfunktion das passende Produkt rendern zu können:
    const productArr = [...products];

    // onClick funktions für den Counter, wie viele Produkte in den Warenkorb sollen:
    const plusOne = () => {
        setCount(count + 1)
        setWarenkorb([...warenkorb, product])
    }

/*     const minusOne = () => {
        if(count > 1){
            setCount(count - 1)
        setWarenkorb([...warenkorb].splice(index, 1))
        } else {
            console.log(count)
            setWarenkorb([...warenkorb].filter((item) => {
                if(item.id !== product.id) {
                    return item
                }
            }))
        }
    } */



    const minusOne = () => {
        if (count > 1) {
            setCount(count - 1);
    
            // Filtern des Arrays, um das Element mit dem Index zu entfernen
            const updatedWarenkorb = warenkorb.filter((item, idx) => idx !== index);
            setWarenkorb(updatedWarenkorb);
        } else {
            // Wenn count kleiner oder gleich 1 ist, das Element anhand der ID filtern
            const updatedWarenkorb = warenkorb.filter((item) => item.id !== product.id);
            setWarenkorb(updatedWarenkorb);
        }
    };

    const addToFavorites = (object) => {
        setFavoriteSelected(!favoriteSelected);
        setFavorites([...favorites, object])
    }

    const addToCart = (object) => {
		setWarenkorb([...warenkorb, object] )
	}

    useEffect(() => {
setCount(counter)  
console.log(warenkorb)
setIndex(warenkorb.map(item => item.id).indexOf(product.id))

 },[counter,warenkorb])

 useEffect(() => {
    console.log(count)
    console.log(index)

 },[count, index])
 
    return ( 
        <article  className="cartPage_wrap">
        <div className="header_wrap_cart">
            <div className="leftArrow_wrap_cart" onClick={() => navigate(-1)}> <LeftArrow /> </div>
            <h2 className="headerTitle_cart">{product.title}</h2>
            {/* <div className="heart_wrap_cart" onClick={() => addToFavorites(product)}> {favoriteSelected ? <HeartFilled /> : <Heart />} </div> */}
        </div>
        
        <div className="detailCard_wrap_cart">
            <img src={product.thumbnail} alt={product.title} />
            <article className="info_wrap_cart">
                <div className="firstFlex_wrap_cart">
                    <h2>{product.title}</h2>
                    <div className="quantityCounter_wrap_cart">
                        <button onClick={minusOne}>-</button>
                        <p>{count}</p>
                        <button onClick={plusOne}>+</button>
                    </div>
                </div>
                <p className="rating_cart"> <Star /> {product.rating}</p>
                <div className="secondFlex_wrap_cart">
                    <p className="stock_cart">{product.stock} pieces in stock</p>
                    <h4 className="price_cart">$ {product.price}.00</h4>
                </div>
            </article>
        </div>
    
    </article>
     );
}
 
export default CartItem;