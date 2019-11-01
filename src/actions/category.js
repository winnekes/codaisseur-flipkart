import { resetSearch } from "../actions/products";
export const SET_CATEGORY = "SET_CATEGORY";

export function setCategory(category) {
	console.log(`in setting category`);
	return {
		type: SET_CATEGORY,
		payload: category
	};
}

export function getCategories() {
	return function(dispatch) {
		fetch("http://localhost:4000/categories")
			.then(res => res.json())
			.then(data => {
				dispatch(setCategory(data));
			});
	};
}
