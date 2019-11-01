const initialState = { users: [], validUser: "" };

//export default (state = [], action) => {
export default (state = initialState, action) => {
	switch (action.type) {
		case "VALIDATE_USER":
			console.log("in reducer", action.payload);

			return {
				...state,
				validUser: action.payload
			};
		case "SET_USERS":
			//return action.payload;
			return {
				...state,
				users: action.payload,
				validUser: ""
			};
		default:
			return state;
	}
};
