export const VALIDATE_USER = "VALIDATE_USER";

export function validateUser(status) {
	return {
		type: VALIDATE_USER,
		payload: status
	};
}

export function getUsers() {
	return function(dispatch) {
		fetch("http://localhost:4000/users")
			.then(res => res.json())
			.then(data => {
				dispatch(setUsers(data));
			});
	};
}

export function setUsers(users) {
	return {
		type: "SET_USERS",
		payload: users
	};
}
