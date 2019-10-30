import { SET_CATEGORY } from "../actions/setCategory";

const initialState = { category: [], loading: "true" };

//export default (state = [], action) => {
export default (state = initialState, action) => {
	switch (action.type) {
		case SET_CATEGORY:
			//return action.payload;
			return {
				...state,
				category: action.payload,
				loading: false
			};
		default:
			return state;
	}
};
