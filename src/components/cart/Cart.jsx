import { useContext, useEffect, useState } from "react";
import { Products } from "../../context/Context";
import Navbar from "../navbar/Navbar";
import CartItem from "../cartitem/CartItem";
import "./Cart.scss"


const Cart = () => {
const {warenkorb, setWarenkorb, cartlength, setCartlength,filteredCart, setFilteredCart} = useContext(Products)
const [productcount, setProductCount]= useState({})
const [totalPrice, setTotalPrice] = useState(0)

/* const [filteredCart, setFilteredCart] = useState(warenkorb)
 */
useEffect(() => {
    setFilteredCart([...new Set(warenkorb)])
    const countObject = warenkorb.reduce((x, y) => {
        if(x[y.id] ) {
            x[y.id] += 1;
        } else  {
            x[y.id] = 1;
        } return x;
    },{})
    setProductCount(countObject)
    let sum = 0;
    warenkorb.forEach(product => {
        sum += Number(product.price)
        
    });
    setTotalPrice(sum)
    console.log(filteredCart)
},[warenkorb])

useEffect(() => {
    setCartlength(filteredCart.length)

},[warenkorb, filteredCart])


    return ( 
<section className="cartcontainer_Cart"> <div className="media_query">
    {filteredCart.length !== 0 ? (filteredCart.map((product, index) => ( 
        <CartItem
        product={product}
        key={index}
        title={product.title}
        price={Number(product.price).toFixed(2)}
        image={product.thumbnail}
        rating={product.rating}
        counter={productcount[`${product.id}`]}
        id={product.id}


    />
    ))):  (<p className="cart_empty">Your Cart is Empty</p>)  }
    </div>
    <div className="price_container"><h2>Total</h2>
        <p>Subtotal: $ {totalPrice}</p>
        <p>Delivery: $ 0.00 </p>
        <p>Total Cost (incl. VAT.): $ {totalPrice}  </p>
        <div><button className="checkout_btn">GO TO CHECKOUT</button></div> 
    </div>
    
    <Navbar />
</section>     );
}
 
export default Cart;