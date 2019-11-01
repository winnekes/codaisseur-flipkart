import React from "react";
import { Table } from "react-bootstrap";
import "./wishlist.css";
import { Button, Alert } from "react-bootstrap";
import { removeFromWishList } from "../actions/wishlist";
import { addToCart } from "../actions/cart";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
function WishList(props) {
	return (
		<div className="wish-cart">
			<h1>Your Wish List</h1>{" "}
			{props.wishedproducts.length < 1 && (
				<Alert variant="info">
					Your Wish list is empty. <br />
					<Link to="/">Go back to our awesomes store</Link>
				</Alert>
			)}
			{props.wishedproducts.length > 0 && (
				<div>
					<Table hover>
						{props.wishedproducts.map(prod => {
							return (
								<div>
									<tr>
										<td>{prod.id}</td>
										<td>{prod.name}</td>
										<td>
											<img
												className="product-img"
												alt={prod.name}
												src={prod.imageUrl}
											/>
										</td>
										<td>{prod.description}</td>

										<td>{prod.price}€</td>
										<td>
											<Button
												variant="danger"
												onClick={() => props.removeFromWishList(prod)}
											>
												X
											</Button>
										</td>
										<td>
											<Button
												variant="primary"
												block
												onClick={() => {
													props.addToCart(prod);
													props.removeFromWishList(prod);
												}}
											>
												Add to cart
											</Button>
										</td>
									</tr>
								</div>
							);
						})}
					</Table>
				</div>
			)}
		</div>
	);
}

export default connect(
	null,
	{ addToCart, removeFromWishList }
)(WishList);
