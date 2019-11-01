const initialState = {
	products: [],
	visibilityFilter: "",
	categoryId: 0,
	searchText: ""
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "SET_PRODUCTS":
			return {
				products: action.payload,
				visibilityFilter: ""
			};

		case "SEARCH_BY_CATEGORY":
			console.log(`in reducer for selected category ${action.payload}`);

			return {
				...state,
				visibilityFilter: "SHOW_PRODUCTS_BY_CATEGORY",
				categoryId: action.payload,
				searchText: ""
			};
		case "SHOW_PRODUCTS_BY_SEARCH":
			console.log(`in reducer for selected category ${action.payload}`);

			return {
				...state,
				visibilityFilter: "SHOW_PRODUCTS_BY_SEARCH",
				categoryId: "",
				searchText: action.payload
			};

		default:
			return state;
	}
};
