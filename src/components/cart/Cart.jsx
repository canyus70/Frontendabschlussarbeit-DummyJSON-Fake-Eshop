import { useContext } from "react";
import { Products } from "../../context/Context";
import ProductItem from "../productitem/ProductItem";
import Navbar from "../navbar/Navbar";


const Cart = () => {
const {warenkorb, setWarenkorb} = useContext(Products)
console.log(warenkorb)

    return ( 
<section>
    {warenkorb.length !== 0 ? (warenkorb.map((product) => ( 
        <ProductItem
        product={product}
        key={product.id}
        title={product.title}
        price={Number(product.price).toFixed(2)}
        image={product.thumbnail}
        rating={product.rating}
    />
    ))):  (<p>Your Cart is Empty</p>)  }
    <Navbar />
</section>     );
}
 
export default Cart;