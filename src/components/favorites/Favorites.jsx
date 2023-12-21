import { useContext, useEffect, useState } from "react";
import { Products } from "./../../context/Context";
import ProductItem from "../productitem/ProductItem";
import './Favorites.scss'
import Navbar from "../navbar/Navbar";
import HeartFilled from "../svg/HeartFilled";

const favorites = () => {
    const { favorites, setFavorites } = useContext(Products);
    console.log('Array favorites', favorites);

    const [filterFavorites, setFilterFavorites] = useState([]);
    useEffect(() => {
        setFilterFavorites([...new Set(favorites)])
    }, [favorites])

    const deleteFavorite = (id) => {
        const filteredFavorites = favorites.filter((singleProduct) => singleProduct.id !== id);
        setFavorites(filteredFavorites);
    }

    return (  
        <>
        <section className="favorites_wrap">
            <section className="new_wrap_favorites">
            <h2>Your desired products</h2>
            {filterFavorites.length !== 0 ? (
                filterFavorites.map((product, index) => (
                    <div className="singleFavoriteItem_wrap" key={index}>
                        
                        <ProductItem
					id={product.id}
					key={product.id}
					title={product.title}
					price={Number(product.price).toFixed(2)}
					image={product.thumbnail}
					rating={product.rating}
                        />
                        <div onClick={() => deleteFavorite(product.id)} className="filledHeart_wrap_favorites">
                            <HeartFilled/>
                        </div>
                    </div>
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