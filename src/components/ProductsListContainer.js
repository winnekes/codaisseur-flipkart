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
	console.log("mapstate:", state.searchedProducts);
	if (state.selectCategory !== null && state.selectCategory > 0) {
		return {
			products: state.products.products.filter(
				product => product.categoryId === state.selectCategory
			)
		};
	}
	if (state.searchedProducts.searchList.length > 0) {
		console.log("in search");
		return {
			products: state.searchedProducts.searchList.map(search =>
				state.products.products.find(product => product.name === search.name)
			)
		};
	}
	return { products: state.products.products };
};

export default connect(
	mapStateToProps,
	{ getProducts }
)(ProductsListContainer);
