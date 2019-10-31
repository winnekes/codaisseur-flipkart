const initialState = { wishlist: [] };

//export default (state = [], action) => {
export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TO_WISHLIST":
			console.log("in reducer", action.payload);
			return {
				...state,
				wishlist: [...state.wishlist, action.payload]
			};
		default:
			return state;
	}
};
