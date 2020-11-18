import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { sharedTasksReducer, tasksReducer } from "./Task/reducers";
import { allUsersReducer, userReducer } from "./User/reducers";
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { history } from "../helpers/browserHistory";


const rootReducer = combineReducers({
    user: userReducer,
    task: tasksReducer,
    allUsers: allUsersReducer,
    sharedTasks: sharedTasksReducer,
    router: connectRouter(history)
});
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(history)),
));

export default store;
