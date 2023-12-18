import { useContext } from "react";
import { Products } from "../context/Context";

const Home = () => {
	const context = useContext(Products);
	console.log(context);
	return <section></section>;
};

export default Home;
