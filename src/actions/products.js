import request from "superagent";

export const SET_PRODUCTS = "SET_PRODUCTS";

export function setProducts(products) {
	return {
		type: SET_PRODUCTS,
		payload: products
	};
}

export function getProducts() {
	/* console.log("in products", id);
	return function(dispatch, getState) {
		console.log("What is in your state??", getState());
		if (getState().products.length !== 0) return;
		request
			//`http://localhost:4000/categories/${encodeURIComponent(id)}/products`
			.get(`http://localhost:4000/categories/1/products`)
			.then(response => {
				dispatch(setProducts(response.body));
			})
			.catch(err => console.log(err));
	}; */

	return function(dispatch) {
		request
			.get(`http://localhost:4000/products`)
			.then(response => {
				dispatch(setProducts(response.body));
			})
			.catch(err => console.log(err));
	};
}

export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";

export function searchProducts(products) {
	return {
		type: SEARCH_PRODUCTS,
		payload: products
	};
}

export const RESET_SEARCH = "RESET_SEARCH";

export function resetSearch() {
	console.log("reset action");
	return {
		type: RESET_SEARCH
	};
}
