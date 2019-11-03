import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";

import { connect } from "react-redux";

class ShoppingCartContainer extends Component {
	getProductDetails = (cart, products) => {
		let productsFromCartWithDetails = cart.map(cartProduct =>
			products.find(product => product.id === cartProduct.productId)
		);

		return productsFromCartWithDetails.map((product, index) => {
			return { ...product, quantity: cart[index].quantity };
		});
	};

	render() {
		return (
			<ShoppingCart
				cart={this.props.cart}
				total={this.props.total}
				products={this.getProductDetails(this.props.cart, this.props.products)}
				clearCart={this.props.clearCart}
			/>
		);
	}
}
const mapStateToProps = state => {
	console.log(state.cart.total);
	return {
		products: state.products.products,
		cart: state.cart.cart,
		total: state.cart.total.toFixed(2)
	};
};

export default connect(
	mapStateToProps,
	{}
)(ShoppingCartContainer);
