import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

export default function CategoryList(props) {
	return (
		<div>
			<ListGroup>
				{props.category.map(category => {
					return <ListGroup.Item>{category.name}</ListGroup.Item>;
				})}
			</ListGroup>
		</div>
	);
}
