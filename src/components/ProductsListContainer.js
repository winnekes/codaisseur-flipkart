import React, { Component } from "react";
import { connect } from "react-redux";

import ProductsList from "./ProductsList";
import { getProducts } from "../actions/products";

import "./products.css";

class ProductsListContainer extends Component {
	componentDidMount = () => {
		this.props.getProducts();
	};

	render() {
		return <ProductsList products={this.props.products} />;
	}
}

const mapStateToProps = state => {
	/* return {
        products: state.products.products
    }; */
	if (state.selectCategory !== null && state.selectCategory > 0) {
		return {
			products: state.products.products.filter(
				product => product.categoryId === state.selectCategory
			)
		};
	}
	return { products: state.products.products };
};

export default connect(
	mapStateToProps,
	{ getProducts }
)(ProductsListContainer);
