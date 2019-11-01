import React, { Component } from "react";
import * as request from "superagent";
import { connect } from "react-redux";
import ProductsList from "./ProductsList";
import { getProducts } from "../actions/products";
import "./products.css";

class ProductsListContainer extends Component {
	componentDidMount() {
		this.props.getProducts();
	}

	render() {
		if (!this.props.products) {
			return <p>Loading...</p>;
		} else {
			return <ProductsList products={this.props.products} />;
		}
	}
}

const getFilteredProductList = (products, filter, categoryId, searchText) => {
	switch (filter) {
		case "SHOW_PRODUCTS_BY_CATEGORY":
			if (categoryId === 0) {
				return products;
			}
			return products.filter(product => product.categoryId === categoryId);
		case "SHOW_PRODUCTS_BY_SEARCH":
			return products.filter(product =>
				product.name.toLowerCase().includes(searchText.toLowerCase())
			);
		default:
			return products;
	}
};

const mapStateToProps = state => {
	console.log("mapstate:", state.products.products);

	return {
		products: getFilteredProductList(
			state.products.products,
			state.products.visibilityFilter,
			state.products.categoryId,
			state.products.searchText
		)
	};
};

export default connect(
	mapStateToProps,
	{ getProducts }
)(ProductsListContainer);
