import { useContext, useState } from "react";
import { Products } from "../context/Context";
import Search from "../components/search/Search";
import CategoryBar from "../components/categorybar/CategoryBar";
import Gallery from "../components/gallery/Gallery";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
    const context = useContext(Products);
    const popular = [...context.products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 10);
    const Allproducts = "all";

    return (
        <main>
            <h1>Find your favorite Product</h1>
            <Search />
            <CategoryBar />
            <div>
                <h3>popular</h3>
                <Link to={`/productlist/${Allproducts}`}>
                    <h3>All Products</h3>
                </Link>
            </div>
            <Gallery renderProducts={popular} />
        </main>
    );
};

export default Home;
