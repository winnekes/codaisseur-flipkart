import React, { Component } from "react";
import { connect } from "react-redux";
import { setQty } from "../actions/cart";
import { setTotal } from "../actions/cart";
class InlineQty extends Component {
	state = {
		qty: ""
	};
	getQty = e => {
		console.log("get:", this.props.id);
		console.log("get:", e.target.value);
		this.setState({ qty: e.target.value });
		this.props.setQty(this.props.id, e.target.value, this.props.price);
		this.props.setTotal();
	};
	render() {
		return (
			<div>
				<select id="dropdown" onChange={this.getQty}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
			</div>
		);
	}
}

export default connect(
	null,
	{ setQty, setTotal }
)(InlineQty);
