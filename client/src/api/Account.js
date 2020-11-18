import API from './index'

const register = (formData) => {
	return new API('POST', 'api/register/', { body: JSON.stringify(formData)});
};

const login = (formData) => {
	return new API('POST', 'api/login/', { body: JSON.stringify(formData)});
};

const logout = () => {
	return new API('GET', 'api/logout/');
};

const getUserList = () => {
    return new API('GET', 'api/user-list/');
}

export const AccountApis = {
    register,
    login,
    logout,
    getUserList
}