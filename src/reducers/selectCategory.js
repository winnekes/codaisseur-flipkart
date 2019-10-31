//import SELECT_CATEGORY from "../actions/category";
export default (state = null, action = {}) => {
	switch (action.type) {
		case "SELECT_CATEGORY":
			console.log(`in reducer for selected category ${action.payload}`);
			return action.payload;
		default:
			return state;
	}
};
