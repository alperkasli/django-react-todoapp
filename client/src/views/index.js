import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./Home";
import LoginPage from "./Login";
import RegisterPage from "./Register";
import SharedTasks from "./SharedTasks";
import AuthRoute from "../helpers/AuthRoute";

const RouterFull = () => (
	<Switch>
		<Route exact path="/login" component={LoginPage} />
		<Route exact path="/register" component={RegisterPage} />
		<AuthRoute exact path="/" component={HomePage} />
		<AuthRoute exact path="/shared-tasks" component={SharedTasks} />
	</Switch>
);

export default RouterFull;
