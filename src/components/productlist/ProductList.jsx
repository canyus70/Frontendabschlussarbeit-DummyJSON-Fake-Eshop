
import { useParams, useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { Products } from "../../context/Context";
import Gallery from "../gallery/Gallery";
import Search from "../search/Search";
import "./ProductList.scss";

const ProduktList = () => {
	const context = useContext(Products);
	const id = useParams().id;

	const [sort, setSort] = useState("");

	const searchResult = useLocation();

	const [renderProducts, setRenderProducts] = useState([]);

	const dress = [...context.products].filter((product) =>
		product.category === "tops" ||
		product.category === "womens-dresses" ||
		product.category === "womens-shoes" ||
		product.category === "mens-shirts" ||
		product.category === "womens-bags" ||
		product.category === "womens-jewellery"
			? product
			: null,
	);
	const category = [...context.products].filter((product) =>
		product.category === id ? product : null,
	);

	const watches = [...context.products].filter((product) =>
		product.category.toString().includes("watch") ? product : null,
	);

	const renderProductsHigh = [...renderProducts].sort(
		(a, b) => b.price - a.price,
	);
	const renderProductsLow = [...renderProducts].sort(
		(a, b) => a.price - b.price,
	);
	const renderProductsRating = [...renderProducts].sort(
		(a, b) => b.rating - a.rating,
	);

	useEffect(() => {
		if (id === "dress") {
			setRenderProducts(dress);
		} else if (id === "watches") {
			setRenderProducts(watches);
		} else if (id === "search") {
			setRenderProducts(searchResult.state.result);
		} else if (id === "all") {
			setRenderProducts([...context.products]);
		} else {
			setRenderProducts(category);
		}
		console.log(sort);
	}, [id, searchResult, sort]);
	return (
		<section className='productList'>
			<Search />
			<form>
				<label htmlFor=''>
					sort by:
					<select
						onChange={(e) => setSort(e.target.value)}
						name=''
						id=''>
						<option value='bestRating'>Best Rating</option>
						<option value='lowestPrice'>Lowest Price</option>
						<option value='highestPrice'>Highest Price</option>
					</select>
				</label>
			</form>
			<Gallery
				renderProducts={
					sort === "highestPrice"
						? renderProductsHigh
						: sort === "lowestPrice"
						? renderProductsLow
						: renderProductsRating
				}
				id={id}
			/>
		</section>
	);
};

=======
import { useContext, useState } from "react";
import { Products } from "../../context/Context";
import ProductItem from "../productitem/ProductItem";
import "./ProductList.scss"

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



    return ( <section className="grid_container">
            <div>Sort by: <button onClick={preisAufsteigend}>aufsteigend</button><button onClick={preisAbsteigend}>absteigend</button> </div>
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




    </section> );
}
 

export default ProduktList;
