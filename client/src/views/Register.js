import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Card,
	Jumbotron,
	CardBody,
	Alert,
	Spinner,
} from "reactstrap";
import { AccountApis } from "../api/Account";
import { loginAction } from "../store/User/action";
import { push } from "connected-react-router";

const Register = (props) => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		email: "",
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
		e.preventDefault();
		localStorage.setItem("token", "");
		setFetching("loading");
		AccountApis.register(formData)
			.then((res) => {
				const { loginDispatch, historyPush } = props;
				loginDispatch(res);
				setErrorMessage(null);
				setFetching("success");
				historyPush("/");
			})
			.catch((err) => {
				console.log(err);
				setErrorMessage(
					"Username or password is not valid. Please try again.."
				);
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
						<h3 className="text-success text-center">Register</h3>
						<Form
							className="mx-auto"
							style={{ width: "300px" }}
							onSubmit={handleSubmit}
						>
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
								/>
							</FormGroup>
							<FormGroup>
								<Label for="formEmail">Email</Label>
								<Input
									type="email"
									name="email"
									id="formEmail"
									placeholder="email (optional..)"
									value={formData.email}
									onChange={handleChange}
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
								/>
							</FormGroup>
							{errorMessage && <Alert color="danger">{errorMessage}</Alert>}
							<Button color="success" className="w-100">
								{fetching === "loading" ? <Spinner /> : "Register"}
							</Button>
						</Form>
						<div className="my-2 d-flex justify-content-center align-items-center">
							Already have an account?
						</div>
						<Link className="button-link" to="/login">
							<Button className="w-100" color="primary" outline>
								Login
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

export default connect(null, mapDispatchToProps)(Register);
