import { LOGIN, LOGOUT, GET_ALL_USERS } from "./types";

export const loginAction = (user) => {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('Token', (user.token || ''));
    localStorage.setItem('user', JSON.stringify(user));
    return {
        type: LOGIN,
        payload: user,
    }
}

export const logoutAction = () => {
    localStorage.clear();
    return {
        type: LOGOUT,
    }
}

export const getAllUsersAction = (users) => {
    return {
        type: GET_ALL_USERS,
        payload: users
    }
}

export const USER_ACTION = {
    loginAction,
    logoutAction,
    getAllUsersAction
}