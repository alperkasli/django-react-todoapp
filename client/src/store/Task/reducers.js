import { LOGOUT } from "../User/types";
import { GET_TASKS, GET_CATEGORIES, GET_SHARED_TASKS } from "./types";

const taskInitialState = {
	tasks: [],
	categories: []
};

export function tasksReducer(state = taskInitialState, action) {
	switch (action.type) {
		case GET_TASKS:
			return {
				...state,
				tasks: action.tasks,
			};
		case GET_CATEGORIES:
			return {
				...state,
				categories: action.categories,
			};

		case LOGOUT:
			return {
				...taskInitialState,
			};

		default:
			return state;
	}
}

const sharedTasksInitialState = []

export function sharedTasksReducer(state = sharedTasksInitialState, action) {
	switch (action.type) {
		case GET_SHARED_TASKS:
			return [...action.payload]

		case LOGOUT:
			return []

		default:
			return state;
	}
}
