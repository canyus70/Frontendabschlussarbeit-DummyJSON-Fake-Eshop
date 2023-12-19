import { useContext, useState } from "react";
import { Products } from "../../context/Context";
import ProductItem from "../productitem/ProductItem";
import "./ProductList.scss"
import Navbar from "../navbar/Navbar";

const ProduktList = () => {
    const context = useContext(Products);
    const [sortedProducts, setSortedProducts] = useState([...context.products]);

    const preisAufsteigend = () => {
        const sorted = [...context.products].sort((a, b) => a.price - b.price);
        setSortedProducts(sorted);
        console.log(sorted)
    };

    const preisAbsteigend = () => {
        const sorted = [...context.products].sort((a, b) => b.price - a.price);
        setSortedProducts(sorted);
        console.log(sorted)
    };

    return ( 
        <section className="grid_container">
                <div>Sort by: 
                    <button onClick={preisAufsteigend}>aufsteigend</button>
                    <button onClick={preisAbsteigend}>absteigend</button> 
                </div>
                {sortedProducts.map((product, index) => 
                    <div key={index}>
                        <ProductItem 
                        id={product.id}
                        img={product.thumbnail}
                        price={product.price}
                        rating={product.rating}
                        name={product.title}
                        />
                    </div>
                )}
                <Navbar/>
        </section> 
    );
}

export default ProduktList;
