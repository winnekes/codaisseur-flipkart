import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsList(props) {
	return (
		<div>
			<h1>Products</h1>
			<div className="products">
				{props.products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
