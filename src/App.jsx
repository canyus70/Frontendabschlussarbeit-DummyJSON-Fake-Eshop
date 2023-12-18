import "./App.css";
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
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/productdetails/ProductDetails";

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
	};

	return (
		<Products.Provider value={contextObject}>
			<Routes >
				<Route path="/" element={<Home />}/>
				<Route path="/product-details/:id" element={<ProductDetails />}/>
			</Routes>
			
		</Products.Provider>
	);
}

export default App;
