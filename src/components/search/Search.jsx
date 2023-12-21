import "./Search.scss";
import Filter from "../../../public/img/Filter.svg";
import { useState, useContext, useEffect } from "react";
import { Products } from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";
import Iconblue from "./../../assets/images/splashscreen/splashscreenIcon2copyblue.svg"
import Iconorange from "./../../assets/images/splashscreen/splashscreenIcon2copyorange.svg"
import loginblue from "./../../../public/img/login.svg"
import loginorange from "./../../../public/img/logincopy.svg"

const Search = () => {
	const [searchInput, setSearchInput] = useState("");
	const [result, setResult] = useState([]);
	const navigate = useNavigate();
	const { products, slide, setSlide } = useContext(Products);
    const darkmode = useContext(Products);

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
			<Link to="/home"><img className="icon_Search" src={darkmode.darkmode ? Iconorange : Iconblue} alt="company icon" /></Link>
			<div className="searchContainer_Search">
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
			</div>
			<Link to="/login"><img className="loginImage_Search" src={darkmode.darkmode ? loginorange : loginblue} alt="login button" /></Link>
		</section>
	);
};

export default Search;
