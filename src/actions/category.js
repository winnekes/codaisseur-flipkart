import { setCategory } from "../actions/setCategory";

export function getCategories() {
	return function(dispatch) {
		fetch("http://localhost:4000/categories")
			.then(res => res.json())
			.then(data => {
				dispatch(setCategory(data));
			});
	};
}
