import React, { Component } from "react";
import * as request from "superagent";
import { connect } from "react-redux";
import CategoryList from "./CategoryList";
import { getCategories } from "../actions/category";
import "./category.css";

class CategoryListContainer extends Component {
	componentDidMount() {
		if (this.props.loading) {
			this.props.getCategories();
		}
	}

	render() {
		if (!this.props.category) {
			return <p>Loading...</p>;
		} else {
			return (
				<div>
					<CategoryList
						category={this.props.category}
						clickCategory={this.clickCategory}
						dispatch={this.props.dispatch}
					/>
				</div>
			);
		}
	}
}

const mapStateToProps = reduxState => {
	return {
		category: reduxState.category.category,
		loading: reduxState.category.loading
	};
};

export default connect(
	mapStateToProps,
	{ getCategories }
)(CategoryListContainer);

// export default connect(mapStateToProps)(AlbumsListContainer);
