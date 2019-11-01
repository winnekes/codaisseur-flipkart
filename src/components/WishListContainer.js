import React, { Component } from "react";
import { connect } from "react-redux";
import WishList from "./WishList";

import { addToCart } from "../actions/cart";

class WishListContainer extends Component {
	render() {
		return <WishList wishedproducts={this.props.wishedproducts} />;
	}
}

const mapStateToProps = reduxState => {
	console.log(reduxState.wishlist.wishlist);
	return {
		wishedproducts: reduxState.wishlist.wishlist.map(
			wish =>
				reduxState.products.products.filter(
					product => product.id === wish.id
				)[0]
		)
	};
};
export default connect(
	mapStateToProps,
	{ addToCart }
)(WishListContainer);
/* 
) */
