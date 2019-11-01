import React, { Component } from "react";
//import { ListGroup } from "react-bootstrap";
import { clickCategory } from "../actions/products";
import { connect } from "react-redux";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryList(props) {
	return (
		<div className="categoryClass">
			<h1>Category List</h1>
			<Nav className="flex-column">
				<Nav.Item className="navClass" onClick={() => props.clickCategory(0)}>
					All Categories
				</Nav.Item>
				{props.category.map(category => {
					return (
						<Nav.Item
							key={category.id}
							className="navClass"
							onClick={() => props.clickCategory(category.id)}
						>
							{category.name}
						</Nav.Item>
					);
				})}
				<Nav.Item className="navClass">
					<Link to="/cart">Go to cart</Link>
				</Nav.Item>
			</Nav>
		</div>
	);
}
export default connect(
	null,
	{ clickCategory }
)(CategoryList);
