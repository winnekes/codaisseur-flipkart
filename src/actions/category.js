export const SET_CATEGORY = "SET_CATEGORY";

export function setCategory(category) {
	//console.log(`in set ${albums}`);
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

export const SELECT_CATEGORY = "SELECT_CATEGORY";
export function clickCategory(id) {
	console.log(`in click ${id}`);
	return {
		type: SELECT_CATEGORY,
		payload: id
	};
}
