import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import RouterFull from "./views";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./helpers/browserHistory";

const App = (props) => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<RouterFull />
			</ConnectedRouter>
		</Provider>
	);
};

export default App;
