import { LOGIN, LOGOUT, GET_ALL_USERS } from "./types";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {
	token: user.token,
	username: user.username,
	email: user.email,
	authenticated: true,
}  : {
	token: undefined,
	username: undefined,
	email: undefined,
	authenticated: false,
};

export function userReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				...action.payload,
				authenticated: true,
			};

		case LOGOUT:
			return {
				token: undefined,
				username: undefined,
				email: undefined,
				authenticated: false
			};

		default:
			return state;
	}
}

const allUsersInitialState = [];

export function allUsersReducer(state = allUsersInitialState, action) {
	switch (action.type) {
		case GET_ALL_USERS:
			return [...action.payload];

		default:
			return state;
	}
}
