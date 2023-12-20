import { useContext } from "react";
import { Products } from "./../../context/Context";
import ProductItem from "../productitem/ProductItem";
import './Favorites.scss'
import Navbar from "../navbar/Navbar";

const favorites = () => {
    const { favorites, setFavorites } = useContext(Products);

    return (  
        <>
        <section className="favorites_wrap">
            <section className="new_wrap_favorites">
            <h2>Your desired products</h2>
            {favorites.length !== 0 ? (
                favorites.map((product) => (
                    <ProductItem
					id={product.id}
					key={product.id}
					title={product.title}
					price={Number(product.price).toFixed(2)}
					image={product.thumbnail}
					rating={product.rating}
				/>
                ))) : (
                    <p>No favorites selected yet</p>
                )
            }
            </section>
        </section>
        <Navbar />
        </>
    );
}
 
export default favorites;