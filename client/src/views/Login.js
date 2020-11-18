import React, { useState } from "react";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Alert,
	CardBody,
	Card,
	Jumbotron,
    Spinner,
} from "reactstrap";
import { AccountApis } from "../api/Account";
import { connect } from "react-redux";
import { loginAction } from "../store/User/action";
import { Link } from "react-router-dom";
import { push } from "connected-react-router";

const Login = (props) => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
	const [errorMessage, setErrorMessage] = useState(null);
	const [fetching, setFetching] = useState("idle");

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		const { loginDispatch, historyPush } = props;
        e.preventDefault();
        setFetching("loading");
		AccountApis.login(formData)
			.then((res) => {
				setErrorMessage(null);
				loginDispatch(res);
                setFetching("success");
                historyPush("/");
			})
			.catch((err) => {
				console.log(err);
                setErrorMessage("upps, password or username not correct..");
                setFetching("error");
			});
	};

	return (
		<div className="d-flex" style={{ height: "80vh" }}>
			<div className="mx-auto my-auto">
				<Card>
					<Jumbotron className="mb-0">
						<h1 className="text-center">TODO APP</h1>
						<p className="text-center">
							Fullstack todo app, created for interview.
						</p>
					</Jumbotron>
					<CardBody>
						<Form
							className="mx-auto"
							style={{ width: "300px" }}
							onSubmit={handleSubmit}
						>
							<h3 className="text-primary text-center">Login</h3>
							<FormGroup>
								<Label for="formUsername">Username</Label>
								<Input
									type="text"
									name="username"
									id="formUsername"
									placeholder="username.."
									value={formData.username}
									onChange={handleChange}
									required
									invalid={errorMessage !== null}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="formPassword">Password</Label>
								<Input
									type="password"
									name="password"
									id="formPassword"
									value={formData.password}
									onChange={handleChange}
									required
									invalid={errorMessage !== null}
								/>
							</FormGroup>
							{errorMessage && <Alert color="danger">{errorMessage}</Alert>}
							<Button className="w-100" color="primary" disabled={fetching==='loading'}>
								{fetching === 'loading' ? <Spinner /> : 'Login'}
							</Button>
						</Form>
						<h6 className="text-center my-2">OR</h6>
						<Link className="button-link" to="/register">
							<Button className="w-100" color="success" outline>
								Register
							</Button>
						</Link>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	loginDispatch: (user) => dispatch(loginAction(user)),
	historyPush: (route) => dispatch(push(route)),
});

export default connect(null, mapDispatchToProps)(Login);
