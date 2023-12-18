import { useContext } from "react";
import { Products } from "../../context/Context";
import ProductItem from "../productitem/ProductItem";
import "./ProductList.scss"

const ProduktList = () => {
    const context = useContext(Products);

    const preisAufsteigend = () => [...context].sort((price1, price2) => {
        return price1.price - price2.price
    })

    return ( <section className="grid_container">
            {context.products.map((product, index) => 

            <div key={index}>
                <ProductItem 
                key={index}
                id={product.id}
                img={product.thumbnail}
                price={product.price}
                rating={product.rating}
                name={product.title}
                />
            </div>
            
            
            )}




    </section> );
}
 
export default ProduktList;
