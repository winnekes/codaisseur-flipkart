const initialState = { wishlist: [] };

//export default (state = [], action) => {
export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TO_WISHLIST":
			console.log("in reducer", action.payload);
			return {
				wishlist: [...state.wishlist, { id: action.payload }]
			};

		case "REMOVE_FROM_WISHLIST":
			console.log("in reducer wishlist", action.payload);
			return {
				...state,
				wishlist: state.wishlist.filter(wish => wish.id !== action.payload.id)
			};
		default:
			return state;
	}
};
