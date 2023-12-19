import { useContext } from "react";
import { Products } from "../context/Context";
import ProduktList from "../components/productlist/ProductList";
import "./Home.scss";
import Navbar from "../components/navbar/Navbar";

const Home = () => {

	const context = useContext(Products);
	console.log(context);

	return (
	<section className="productlistContainer_Home">
		<ProduktList/>
		<Navbar/>
	</section>
	);
};

export default Home;
