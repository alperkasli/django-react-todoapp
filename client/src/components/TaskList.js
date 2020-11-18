import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Alert, Spinner } from "reactstrap";
import { AccountApis } from "../api/Account";
import { todoApis } from "../api/Todos";
import { setSharedTasksAction, setTasksAction } from "../store/Task/actions";
import { getAllUsersAction } from "../store/User/action";
import TaskItem from "./TaskItem";

const TaskList = ({ sharedTasksView, ...props }) => {
	const [fetching, setFetching] = useState("idle");

	const handleGetTasks = () => {
		const { setTasksDispatch } = props;
		setFetching("loading");
		todoApis
			.todoList()
			.then((res) => {
				setFetching("success");
				setTasksDispatch(res);
			})
			.catch((err) => {
				setFetching("error");
				console.log(err);
			});
	};

	const handleGetSharedTasks = () => {
		const { setSharedTasksDispatch } = props
		setFetching("loading");
		todoApis
			.getSharedTaskList()
			.then((res) => {
				setFetching("success");
				setSharedTasksDispatch(res);
			})
			.catch((err) => {
				setFetching("error");
				console.log(err);
			});
	};

	const handleGetUsers = () => {
		const { getAllUsersDispatch } = props;
		AccountApis.getUserList().then((res) => {
			getAllUsersDispatch(res);
		});
	};

	useEffect(() => {
		handleGetUsers();
		if (sharedTasksView) {
			handleGetSharedTasks();
		} else {
			handleGetTasks();
		}
	}, []);

	return (
		<div className="task-container">
			{fetching === "loading" && <Spinner className="d-flex mx-auto my-2" color="primary" />}
			{sharedTasksView
				? props.sharedTasks.map((sharedTask) => (
						<TaskItem
							getTaskList={handleGetTasks}
							taskDetails={sharedTask.task}
							taskSharedBy={sharedTask.shared_by}
							key={"task" + sharedTask.task.id}
						/>
				  ))
				: props.myTasks.map((task) => (
						<TaskItem
							getTaskList={handleGetTasks}
							taskDetails={task}
							key={"task" + task.id}
						/>
				  ))}
			{!sharedTasksView &&
				props.myTasks.length === 0 &&
				fetching === "success" && (
					<Alert className="text-center" color="info">
						<i className="fa fa-info fa-4x"></i> <br /> You haven't created any
						task yet. Start adding by clicking Add Task button.
					</Alert>
				)}
			{sharedTasksView &&
				props.sharedTasks.length === 0 &&
				fetching === "success" && (
					<Alert className="text-center" color="info">
						<i className="fa fa-info fa-4x"></i> <br /> You haven't recevied any
						task from other users yet.{" "}
					</Alert>
				)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		myTasks: state.task.tasks,
		sharedTasks: state.sharedTasks,
	};
};

const mapDispatchToProps = (dispatch) => ({
	setTasksDispatch: (tasks) => dispatch(setTasksAction(tasks)),
	getAllUsersDispatch: (users) => dispatch(getAllUsersAction(users)),
	setSharedTasksDispatch: (tasks) => dispatch(setSharedTasksAction(tasks)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
