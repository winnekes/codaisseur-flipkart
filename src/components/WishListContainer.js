import React, { Component } from "react";
import { connect } from "react-redux";
import WishList from "./WishList";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import "./shoppingcart.css";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cart";

class WishListContainer extends Component {
	render() {
		//console.log(this.props.wishedproducts);
		if (!this.props.wishedproducts) {
			return <p>Loading...</p>;
		} else {
			return (
				<div className="shopping-cart">
					<Link to="/">back to home</Link>
					<WishList wishedproducts={this.props.wishedproducts} />
				</div>
			);
		}
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
