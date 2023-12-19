import { useContext } from "react";
import { Products } from "../context/Context";
import ProduktList from "../components/productlist/ProductList";

const Home = () => {
	const context = useContext(Products);
	console.log(context);
	return <section><ProduktList/></section>;
};

export default Home;
