import { useContext } from "react";
import { Products } from "../../context/Context";
import ProductItem from "../productitem/ProductItem";

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
        ))):  (<p>Cart is Empty</p>)  }
    </section>     
    );
}
 
export default Cart;