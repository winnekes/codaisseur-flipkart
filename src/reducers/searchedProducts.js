const initialState = { searchList: [] };
export default (state = initialState, action = {}) => {
	switch (action.type) {
		case "SEARCH_PRODUCTS":
			console.log(`in reducer for selected PRODUCTS ${action.payload}`);
			return {
				...state,
				searchList: action.payload
			};
		case "RESET_SEARCH":
			console.log(`in reducer for resetting PRODUCTS ${action.payload}`);
			return { searchList: [] };
		default:
			return state;
	}
};
