import API from './index'

const todoList = () => {
	return new API('GET', 'api/task-list/');
};

const addTodo = (formData) => {
	return new API('POST', 'api/task-create/', { body: JSON.stringify(formData)});
};

const getTaskCategories = () => {
	return new API('GET', 'api/get-task-categories/');
};

const createTaskCategory = (formData) => {
	return new API('POST', 'api/create-task-category/', { body: JSON.stringify(formData)});
};

const toggleTaskCompleted = (taskId) => {
	return new API('PATCH', `api/toggle-task-completed/${taskId}/`);
};

const updateTask = (taskId, formData) => {
	return new API('POST', `api/task-update/${taskId}/`, { body: JSON.stringify(formData)});
};

const deleteTask = (taskId) => {
	return new API('DELETE', `api/task-delete/${taskId}/`);
};

const shareTask = (formData) => {
	return new API('POST', `api/share-task/`, { body: JSON.stringify(formData)});
};

const getSharedTaskList = (formData) => {
	return new API('GET', `api/shared-tasks-list/`);
};

export const todoApis = {
    todoList,
    addTodo,
    getTaskCategories,
    createTaskCategory,
    toggleTaskCompleted,
    updateTask,
    deleteTask,
    shareTask,
    getSharedTaskList
}