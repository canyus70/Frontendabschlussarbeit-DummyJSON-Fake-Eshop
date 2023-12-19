import "./App.scss";
import {
	allProducts,
	allCarts,
	allUsers,
	allPosts,
	allComments,
	allTodos,
	allQoutes,
} from "./data/Data";
import { useContext, useState } from "react";
import {
	Products,
	Carts,
	Users,
	Posts,
	Comments,
	Todos,
	Qoutes,
} from "./context/Context";
import Home from "./pages/Home";
import Splashscreen from "./pages/splashscreen/Splashscreen";
import Onboarding from "./pages/Onboarding/Onboarding";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/productdetails/ProductDetails";
import Search from "./components/search/Search";
import ProduktList from "./components/productlist/ProductList";

function App() {
	const productContext = useContext(Products);
	const cartsContext = useContext(Carts);
	const usersContext = useContext(Users);
	const postsContext = useContext(Posts);
	const commetsContext = useContext(Comments);
	const todosContext = useContext(Todos);
	const qoutesContext = useContext(Qoutes);
	const [products, setProducts] = useState(allProducts);
	const [carts, setCarts] = useState(allCarts);
	const [users, setUsers] = useState(allUsers);
	const [posts, setPosts] = useState(allPosts);
	const [comments, setComments] = useState(allComments);
	const [todos, setTodos] = useState(allTodos);
	const [qoutes, setQoutes] = useState(allQoutes);
	const [slide, setSlide] = useState(false);
	const [price, setPrice] = useState({ lowest: "", highest: "" });
	const [brand, setBrand] = useState("");

	const contextObject = {
		products,
		setProducts,
		carts,
		setCarts,
		users,
		setUsers,
		posts,
		setPosts,
		comments,
		setComments,
		todos,
		setTodos,
		qoutes,
		setQoutes,
		slide,
		setSlide,
		price,
		setPrice,
		brand,
		setBrand,
	};

	return (
		<Products.Provider value={contextObject}>
			<Routes>
				<Route
					path='/'
					element={<Splashscreen />}
				/>
				<Route
					path='/onboarding'
					element={<Onboarding />}
				/>
				<Route
					path='/productlist/:id'
					element={<ProduktList />}
				/>
				<Route
					path='/home'
					element={<Home />}
				/>
				<Route
					path='/product-details/:id'
					element={<ProductDetails />}
				/>
			</Routes>
		</Products.Provider>
	);
}

export default App;
