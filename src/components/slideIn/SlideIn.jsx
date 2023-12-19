import { useContext, useEffect } from "react";
import "./SlideIn.scss";
import { Products } from "../../context/Context";
import CategoryBar from "../categorybar/CategoryBar";
import { useNavigate } from "react-router-dom";

const SlideIn = () => {
	const { slide, setSlide, price, setPrice, brand, setBrand } =
		useContext(Products);

	const filterPrice = (low, high) => {
		setPrice({ lowest: low, highest: high });
	};

	const navigate = useNavigate();

	const All = "all";

	const resetFilter = () => {
		setPrice("");
		setBrand("");
		setSlide(!slide);
		navigate(`/productlist/${All}`);
	};

	useEffect(() => {
		console.log(price);
		console.log(brand);
	}, [slide, price, brand]);
	return (
		<section className={slide ? "slideAktive slide" : "slide"}>
			<article>
				<h3>Categories</h3>
				<CategoryBar />
			</article>
			<article>
				<h3>Price</h3>
				<div>
					<p onClick={() => filterPrice(0, 20)}>0 - 20€</p>
					<p onClick={() => filterPrice(20, 50)}>20 - 50€</p>
					<p onClick={() => filterPrice(50, 100)}>50 - 100€</p>
					<p onClick={() => filterPrice(100, 100000)}>Über 100€</p>
				</div>
			</article>
			<article>
				<h3>Brands</h3>
				<div>
					<p onClick={(e) => setBrand(e.target.innerText)}>Apple</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>Nike</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>adidas</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>Lenovo</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>Sony</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>Nescafé</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>Dior</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>Lego</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>Braun</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>L’Oreal</p>
					<p onClick={(e) => setBrand(e.target.innerText)}>Zara</p>
				</div>
			</article>
			<button
				className='addFilterBtn'
				onClick={() => setSlide(!slide)}>
				Apply Filter
			</button>
			<button
				className='addFilterBtn'
				onClick={() => resetFilter()}>
				Reset Filter
			</button>
		</section>
	);
};

export default SlideIn;
