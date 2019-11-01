import React from "react";
import { Table } from "react-bootstrap";
import "./shoppingcart.css";
import { Button } from "react-bootstrap";
import { removeFromWishList } from "../actions/wishlist";
import { addToCart } from "../actions/cart";

import { connect } from "react-redux";
function WishList(props) {
	return (
		<Table bordered>
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
	);
}

export default connect(
	null,
	{ addToCart, removeFromWishList }
)(WishList);
