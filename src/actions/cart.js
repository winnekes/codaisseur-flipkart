export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const APPLY_DISCOUNT = "APPLY_DISCOUNT";
export const SET_QTY = "SET_QTY";
export const SET_TOTAL = "SET_TOTAL";

export function addToCart(product) {
	return {
		type: ADD_TO_CART,
		payload: {
			productId: product.id,
			price: product.price
		}
	};
}
export function applyDiscount() {
	return {
		type: "APPLY_DISCOUNT",
		payload: 15
	};
}
export function removeFromCart(product) {
	return {
		type: REMOVE_FROM_CART,
		payload: {
			productId: product.id,
			price: product.price
		}
	};
}

export function clearCart() {
	return {
		type: CLEAR_CART
	};
}

export function setQty(id, qty, price) {
	console.log("in set actions");
	return {
		type: SET_QTY,
		payload: {
			productId: id,
			quantity: qty,
			price: price
		}
	};
}

export function setTotal() {
	console.log("in set actions");
	return {
		type: SET_TOTAL
	};
}
