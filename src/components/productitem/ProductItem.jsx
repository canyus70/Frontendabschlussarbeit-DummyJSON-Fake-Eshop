import { Link } from "react-router-dom";
import "./ProductItem.scss";
import Frame from "../../../public/img/Frame.svg";
import { useContext } from "react";
import { Products } from "../../context/Context";


const ProductItem = ({ product, title, price, image, rating }) => {
	const {warenkorb, setWarenkorb}= useContext(Products)
	console.log(warenkorb,setWarenkorb)

	const addToCart = () => {
		setWarenkorb([...warenkorb, product] )
		console.log(warenkorb)
	}


	return (
		<article className='productItem'>
			<Link onClick={(e) => console.log("product")}>
				<img
					src={image}
					alt=''
					className='productImage'
				/>
				<h4>⭐ {rating}</h4>
				<h2>{title}</h2>
			</Link>
			<div>
				<h3>${Number(price).toFixed(2)}</h3>
				<Link
					className='addButton'
					onClick={() => addToCart()}>
					<img
						src={Frame}
						alt='button for adding to cart'
						className='addButton'
					/>
				</Link>
			</div>
		</article>
	);
};

export default ProductItem;
