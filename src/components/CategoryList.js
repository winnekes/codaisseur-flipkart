import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

export default function CategoryList(props) {
	return (
		<div className="categoryClass">
			<h1>Category List</h1>
			<ListGroup>
				{props.category.map(category => {
					return <ListGroup.Item>{category.name}</ListGroup.Item>;
				})}
			</ListGroup>
		</div>
	);
}
