import { Link } from "react-router-dom";
import "./ProductItem.scss";
import Frame from "../../../public/img/Frame.svg";
import Framecopy from "../../../public/img/Framecopy.svg";
import { useContext } from "react";
import Star from "../svg/Star";
import { Products } from "../../context/Context";


const ProductItem = ({ id, product, title, price, image, rating }) => {
	const {warenkorb, setWarenkorb}= useContext(Products)
	// console.log(warenkorb,setWarenkorb)

	const addToCart = () => {
		setWarenkorb([...warenkorb, product] )
		// console.log(warenkorb)
	}

	const changeIcon = useContext(Products)


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
