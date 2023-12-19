import "./Gallery.scss";
import ProductItem from "../productitem/ProductItem";
import { useEffect } from "react";

const Gallery = ({ renderProducts, id }) => {
	useEffect(() => {}, [renderProducts]);
	return (
		<section className='gallery'>
			{renderProducts.map((product) => (
				<ProductItem
					key={product.id}
					id={product.id}
					title={product.title}
					price={Number(product.price).toFixed(2)}
					image={product.thumbnail}
					rating={product.rating}
				/>
			))}
		</section>
	);
};

export default Gallery;
