import React from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { addToWishList } from "../actions/wishlist";
import { addToCart } from "../actions/cart";
import { connect } from "react-redux";
function ProductCard(props) {
	const product = props.product;

	return (
		<Card className="product-card" style={{ width: "200px" }}>
			<div className="image">
				<Card.Img variant="top" src={product.imageUrl} />
			</div>
			<Card.Body>
				<Card.Title>{product.name}</Card.Title>
				<Card.Text>
					{product.description}
					<br />
					Price: {product.price}€
				</Card.Text>
				<Button
					variant="primary"
					block
					onClick={() => props.addToCart(product)}
				>
					Add to cart
				</Button>
				<Button
					variant="secondary"
					block
					//onClick={() => props.addToWishList(product.id)}
					onClick={() =>
						checkDuplicateWish(product, props.wishlist, props.addToWishList)
					}
				>
					Add to WishList
				</Button>
			</Card.Body>
		</Card>
	);
}
const checkDuplicateWish = (product, wishlist, addToWishList) => {
	if (wishlist.length === 0) {
		addToWishList(product.id);
	} else {
		const duplicateFound = wishlist.find(wish => wish.id === product.id);
		console.log(duplicateFound);
		if (duplicateFound !== undefined) {
			alert("Product already in the wishlist");
		} else {
			addToWishList(product.id);
		}
	}
};
const mapStateToProps = reduxState => {
	return {
		wishlist: reduxState.wishlist.wishlist
	};
};
export default connect(
	mapStateToProps,
	{ addToWishList, addToCart }
)(ProductCard);
