export const SET_CATEGORY = "SET_CATEGORY";
export function setCategory(category) {
	//console.log(`in set ${albums}`);
	return {
		type: SET_CATEGORY,
		payload: category
	};
}
