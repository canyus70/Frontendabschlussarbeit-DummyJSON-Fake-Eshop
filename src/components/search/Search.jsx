import "./Search.scss";
import Filter from "../../../public/img/Filter.svg";
import { useState, useContext, useEffect } from "react";
import { Products } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Search = () => {
	const [searchInput, setSearchInput] = useState("");
	const [result, setResult] = useState([]);
	const navigate = useNavigate();
	const { products, slide, setSlide } = useContext(Products);

	const searchRender = "search";

	const search = () => {
		event.preventDefault();
		navigate(`/productlist/${searchRender}`, {
			state: { result },
		});
	};

	useEffect(() => {
		if (searchInput.length > 3) {
			setResult(
				[...products].filter((product) => {
					if (
						product.title.toLowerCase().includes(searchInput) ||
						product.description
							.toLowerCase()
							.includes(searchInput) ||
						product.category.toLowerCase().includes(searchInput)
					) {
						return product;
					}
				}),
			);
		}
	}, [searchInput]);

	return (
		<section className='searchWrapper'>
			<form
				className='search'
				onSubmit={search}>
				<input
					type='text'
					placeholder='Search...'
					onChange={(e) => setSearchInput(e.target.value)}
				/>
			</form>
			<section className='imageHolder'>
				<img
					src={Filter}
					alt=''
					onClick={() => setSlide(!slide)}
					className='filterIcon'
				/>
			</section>
		</section>
	);
};

export default Search;
