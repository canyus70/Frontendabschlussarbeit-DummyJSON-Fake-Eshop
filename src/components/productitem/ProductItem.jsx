import { Link } from "react-router-dom";
import "./ProductItem.scss";
import Frame from "../../../public/img/Frame.svg";
import Framecopy from "../../../public/img/Framecopy.svg";
import { useContext, useState } from "react";
import Star from "../svg/Star";
import { Products } from "../../context/Context";


const ProductItem = ({ id, product, title, price, image, rating }) => {
	const {warenkorb, setWarenkorb}= useContext(Products)
	const changeIcon = useContext(Products)

	const addToCart = () => {
		setWarenkorb([...warenkorb, product] )
	}
/* 	const addToCart = () => {
		const updatedCartItems = { ...warenkorb }; // Kopie des aktuellen Warenkorbs
		updatedCartItems[id] = (updatedCartItems[id] || 0) + 1; // Erhöhe die Anzahl für das Produkt
		setWarenkorb(updatedCartItems); // Aktualisiere den Warenkorb im Context
		console.log(updatedCartItems)
	  }; */


	/*   const getTotalCartAmount = () => {
		  let totalAmount = 0;
		  for (const id in warenkorb) {
			  if (warenkorb[id] > 0) {
				  let itemInfo = product.find((pro) => pro.id === Number(id));
				  totalAmount += warenkorb[id] * itemInfo.price;
				}
			}
			return totalAmount;
		}; */

	return (
		<article className='productItem'>
			<Link to={`/product-details/${id}`}>
				<img
					src={image}
					alt=''
					className='productImage'
				/>
				<h4 className="rating_productitem"><Star /> {rating}</h4>
				<h2>{title}</h2>
			</Link>
			<div>
				<h3>${Number(price).toFixed(2)}</h3>
				<Link
					className='addButton'
					onClick={() => addToCart()}>
					<img
						src={changeIcon.darkmode ? Framecopy : Frame}
						alt='button for adding to cart'
						className='addButton'
					/>
				</Link>
			</div>
		</article>
	);
};

export default ProductItem;
