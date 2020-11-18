import { GET_TASKS, GET_CATEGORIES, GET_SHARED_TASKS } from "./types";

export const setTasksAction = (tasks) => {
    return {
        type: GET_TASKS,
        tasks,
    }
}

export const setCategoriesAction = (categories) => {
    return {
        type: GET_CATEGORIES,
        categories
    }
}

export const setSharedTasksAction = (sharedTasks) => {
    return {
        type: GET_SHARED_TASKS,
        payload: sharedTasks
    }
}