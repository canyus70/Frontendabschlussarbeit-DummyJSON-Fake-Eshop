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
import { useContext, useEffect, useState } from "react";
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
import Favorites from "./components/favorites/Favorites";
import Cart from "./components/cart/Cart";

function App() {
	const productContext = useContext(Products);
	const cartsContext = useContext(Carts);
	const usersContext = useContext(Users);
	const postsContext = useContext(Posts);
	const commetsContext = useContext(Comments);
	const todosContext = useContext(Todos);
	const qoutesContext = useContext(Qoutes);

	const [darkmode, setDarkmode] = useState(false)
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
	const [favorites, setFavorites] = useState([]);
	const [warenkorb, setWarenkorb] = useState([]);

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
		favorites,
		setFavorites,
		warenkorb,
		setWarenkorb,
		darkmode,
		setDarkmode
	};

	useEffect(() => {
		if (localStorage.getItem("darkmode") === "true") {
			setDarkmode(true)
		} else {
			setDarkmode(false)
		}
	}, [])

	return (
		<Products.Provider value={contextObject}>
			<div className={`appContainer_App ${darkmode ? "darkmode" : ""}`}>
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
					<Route
						path='/favorites'
						element={<Favorites />}
					/>
					<Route
						path='/cart'
						element={<Cart />}
					/>
				</Routes>
			</div>
		</Products.Provider>
	);
}

export default App;