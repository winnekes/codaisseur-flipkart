import React from "react";
import { Table, Alert, Button, Toast } from "react-bootstrap";
import "./shoppingcart.css";
import { setTotal } from "../actions/cart";
import { connect } from "react-redux";
import { removeFromCart, clearCart } from "../actions/cart";
import { Link } from "react-router-dom";
import AddDiscountCodeForm from "./AddDiscountCodeForm";
import InlineQty from "./InlineQty";

const setQty = qty => {};
function ShoppingCart(props) {
	return (
		<div className="shopping-cart">
			<h1>Your Shopping Cart</h1>{" "}
			{props.products.length < 1 && (
				<Alert variant="info">
					Your cart is empty. How about you go back to the products and start
					buying? <br />
					<Link to="/">Go back to our awesome store</Link>
				</Alert>
			)}
			{props.products.length > 0 && (
				<div>
					<Table hover>
						<tbody>
							{props.products.map(product => {
								return (
									<tr key={product.id}>
										<td>
											<img
												className="product-img"
												alt={product.name}
												src={product.imageUrl}
											/>
										</td>
										<td>{product.name}</td>
										<td>{product.description}</td>

										<td>
											<InlineQty id={product.id} price={product.price} />
										</td>
										<td>
											<Button
												variant="danger"
												onClick={() => {
													props.removeFromCart(product);
													props.setTotal();
												}}
											>
												X
											</Button>
										</td>
										<td>{product.price * product.quantity}€</td>
									</tr>
								);
							})}
						</tbody>
						<tfoot>
							<tr>
								<td colSpan="5">Total:</td>
								<td>({props.total})€</td>
							</tr>
						</tfoot>
					</Table>
					<Button variant="danger" onClick={() => props.clearCart()}>
						Clear whole cart
					</Button>{" "}
					<br />
					<br />
					<AddDiscountCodeForm />
					<Link to="/">Back to our awesome store!</Link>
				</div>
			)}
		</div>
	);
}

export default connect(
	null,
	{ removeFromCart, clearCart, setTotal }
)(ShoppingCart);
