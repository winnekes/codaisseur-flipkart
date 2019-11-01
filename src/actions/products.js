import request from "superagent";

export const SET_PRODUCTS = "SET_PRODUCTS";

export function setProducts(products) {
	return {
		type: SET_PRODUCTS,
		payload: products
	};
}

export function getProducts() {
	return function(dispatch) {
		request
			.get(`http://localhost:4000/products`)
			.then(response => {
				dispatch(setProducts(response.body));
			})
			.catch(err => console.log(err));
	};
}

export const SHOW_PRODUCTS_BY_SEARCH = "SHOW_PRODUCTS_BY_SEARCH";

export function searchProducts(searchText) {
	return {
		type: SHOW_PRODUCTS_BY_SEARCH,
		payload: searchText
	};
}

export const SEARCH_BY_CATEGORY = "SEARCH_BY_CATEGORY";
export function clickCategory(id) {
	return {
		type: SEARCH_BY_CATEGORY,
		payload: id
	};
}
