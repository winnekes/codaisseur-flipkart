import React from "react";
import { Table } from "react-bootstrap";
import "./shoppingcart.css";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";
export default function WishList(props) {
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
									variant="primary"
									block
									onClick={() => this.props.addToCart(prod)}
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
