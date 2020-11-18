import React, { useState } from "react";
import { Badge, Button, Collapse, Spinner } from "reactstrap";
import { todoApis } from "../api/Todos";
import TopNavbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import { connect } from "react-redux";
import { setTasksAction } from "../store/Task/actions";
import TaskList from "../components/TaskList";

function Home(props) {
	const [collapseOpen, setCollapseOpen] = useState(false);
	const [fetching, setFetching] = useState("idle");
	const handleGetTasks = () => {
		const { setTasks } = props;
		setFetching("loading");
		todoApis
			.todoList()
			.then((res) => {
				setTasks(res);
				setFetching("success");
			})
			.catch((err) => {
				console.log(err);
				setFetching("error");
			});
	};

	const toggleCollapse = () => {
		setCollapseOpen(!collapseOpen);
	};

	const handleNewTaskCreated = () => {
		handleGetTasks();
		toggleCollapse();
	};

	return (
		<div className="container">
			<TopNavbar />
			<div className="card mt-4">
				<div className="card-header d-flex">
					<h2 className="text-primary">
						<Badge color="" pill>
							<i className="fa fa-tasks"></i>
						</Badge>
						My Tasks
					</h2>
					<Button className="ml-auto" color="success" onClick={toggleCollapse}>
						<i className="fa fa-plus fa-fw"></i> Add Task
					</Button>
				</div>
				<Collapse isOpen={collapseOpen}>
					<div className="card">
						<div className="card-body border-left-primary p-4">
							<h4 className="text-primary">New Task</h4>
							<TaskForm submitCallback={handleNewTaskCreated} />
						</div>
					</div>
				</Collapse>
				<div className="card-body m-0 p-0">
					{fetching === "loading" && (
						<Spinner className="d-flex mx-auto my-2" color="primary" />
					)}
					<TaskList />
				</div>
			</div>
		</div>
	);
}

// const mapStateToProps = (state) => {
// 	console.log(state, "redux store");
// 	return {
// 		categories: state.task.categories,
// 	};
// };

const mapDispatchToProps = (dispatch) => ({
	setTasks: (tasks) => dispatch(setTasksAction(tasks)),
});

export default connect(null, mapDispatchToProps)(Home);
