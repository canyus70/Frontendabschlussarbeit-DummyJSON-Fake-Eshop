import { useContext, useEffect, useState } from "react";
import { Products } from "../../context/Context";
import Navbar from "../navbar/Navbar";
import CartItem from "../cartitem/CartItem";
import "./Cart.scss"

const Cart = () => {
const {warenkorb, setWarenkorb} = useContext(Products)
const [productcount, setProductCount]= useState({})
const [totalPrice, setTotalPrice] = useState(0)

const [filteredCart, setFilteredCart] = useState(warenkorb)

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
    console.log(sum)
},[warenkorb])


    return ( 
<section className="cartcontainer_Cart">
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
    ))):  (<p>Your Cart is Empty</p>)  }
    <div>$ {totalPrice}</div>
    <Navbar />
</section>     );
}
 
export default Cart;