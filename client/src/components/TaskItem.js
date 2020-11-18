import React from "react";
import { useState } from "react";
import {
	FormGroup,
	Label,
	Input,
	Button,
	Badge,
	Spinner,
	PopoverBody,
	Popover,
} from "reactstrap";
import { todoApis } from "../api/Todos";
import ShareTaskPopover from "./ShareTaskPopover";
import TaskCategories from "./TaskCategories";

const TaskItem = ({ taskDetails, getTaskList, taskSharedBy }) => {
	const [taskData, setTaskData] = useState(taskDetails);
	const {
		id,
		category,
		completed,
		description,
		due_date,
		priority,
		title,
	} = taskData;

	const [isEditView, setIsEditView] = useState(false);
	const [deleteTaskPopover, setDeleteTaskPopover] = useState(false);
	const [fetching, setFetching] = useState("idle");
	const [formData, setFormData] = useState({
		title: title,
		priority: priority,
		description: description,
		category_id: category && category.id,
	});

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleEditSubmit = () => {
		setFetching("loading");
		todoApis
			.updateTask(id, formData)
			.then((res) => {
				setTaskData(res);
				setIsEditView(false);
				setFetching("success");
			})
			.catch((err) => {
				console.log(err);
				setFetching("error");
			});
	};

	const handleTaskComplete = () => {
		setFetching("loading");
		todoApis
			.toggleTaskCompleted(id)
			.then((res) => {
				setTaskData(res);
				setFetching("success");
			})
			.catch((err) => {
				console.log(err);
				setFetching("error");
			});
	};

	const handleDeleteTaskPopover = () => {
		setDeleteTaskPopover(!deleteTaskPopover);
	};

	const handleDeleteTask = () => {
		setFetching("loading");
		handleDeleteTaskPopover()
		todoApis.deleteTask(id).then((res) => {
			getTaskList();
			setFetching("success");
		});
	};

	return (
		<div className="position-relative shadow border-left-info m-2">
			{fetching === "loading" && (
				<div className="blurred-container-inner">
					<Spinner type="grow" style={{ zIndex: "3" }} color="warning" />
				</div>
			)}

			<div className={`${fetching === "loading" && "blurred-container"}`}>
				{!isEditView ? (
					<>
						<div className="d-flex bg-info align-items-center">
							<div className="p-4">
								{!taskSharedBy && (
									<Badge
										style={{ cursor: "pointer" }}
										color={completed ? "success" : "secondary"}
										onClick={handleTaskComplete}
									>
										{completed ? (
											<i className="fa fa-check-square fa-2x"></i>
										) : (
											<i className="fa fa-square fa-2x"></i>
										)}
									</Badge>
								)}
							</div>
							<div className="ml-2">
								<h4 className="text-white">{title}</h4>
								<h6 className="text-white">
									{category && <small>Category: {category.name}</small>}
								</h6>
							</div>

							{taskSharedBy ? (
								<div className="ml-auto mr-2">
									<span className="text-white">Shared From: </span>
									<Badge color="primary">{taskSharedBy.username}</Badge>
								</div>
							) : (
								<div className="d-flex ml-auto">
									<div className="">
										<ShareTaskPopover taskId={id} />
									</div>
									<div className="ml-2">
										<Button color="warning" onClick={() => setIsEditView(true)}>
											<i className="fa fa-edit text-white"></i>
										</Button>
									</div>
									<div className="mx-2">
										<Button
											color="danger"
											onClick={handleDeleteTaskPopover}
											id={"delete-task-button" + id}
										>
											<i className="fa fa-trash"></i>
										</Button>
										<Popover
											isOpen={deleteTaskPopover}
											trigger="legacy"
											placement="bottom"
											target={"delete-task-button" + id}
											toggle={handleDeleteTaskPopover}
										>
											<PopoverBody className="text-center">
												<i className="fa fa-exclamation text-danger fa-2x"></i> <br />
												Are you sure to delete this task?
												<div className="d-flex justify-content-between mt-2">
													<Button
														color="secondary"
														onClick={handleDeleteTaskPopover}
													>
														Cancel
													</Button>
													<Button color="danger" onClick={handleDeleteTask}>
														Delete
													</Button>
												</div>
											</PopoverBody>
										</Popover>
									</div>
								</div>
							)}
						</div>
						<Badge
							color={
								priority === "high"
									? "danger"
									: priority === "normal"
									? "info"
									: "secondary"
							}
							className="float-right mr-4 mt-2"
						>
							Priority: {priority}
						</Badge>
						<div className="mt-2 p-4">
							<p style={{ whiteSpace: "pre-wrap" }}>{description}</p>
							<Badge color="light" className="float-right">
								Due Date: {due_date}
							</Badge>
						</div>
					</>
				) : (
					<>
						<div className="d-flex bg-info align-items-center">
							<div className="p-4">
								<Badge
									style={{ cursor: "pointer" }}
									color={completed ? "success" : "secondary"}
									onClick={handleTaskComplete}
								>
									{completed ? (
										<i className="fa fa-check-square fa-2x"></i>
									) : (
										<i className="fa fa-square fa-2x"></i>
									)}
								</Badge>
							</div>
							<div className="my-2">
								<div className="row mb-2">
									<div className="col-4">
										<Label
											className="text-white font-weight-bold"
											htmlFor={"editTitleInput" + id}
										>
											Title
										</Label>
									</div>
									<div className="col-8">
										<Input
											id={"editTitleInput" + id}
											type="text"
											name="title"
											placeholder="title.."
											value={formData.title}
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="row">
									<div className="col-4">
										<Label
											className="text-white font-weight-bold"
											htmlFor={"editCategorySelect" + id}
										>
											Category
										</Label>
									</div>
									<div className="col-8">
										<TaskCategories
											id={"editCategorySelect" + id}
											hideLabel
											selectedCategory={{
												label: category && category.name,
												value: category && category.id,
											}}
											handleCategorySelect={setFormData}
										/>
									</div>
								</div>
							</div>

							<div className="ml-auto">
								<Button color="success" onClick={handleEditSubmit}>
									<i className="fa fa-check"></i>
								</Button>
							</div>
							<div className="mx-2">
								<Button color="danger" onClick={() => setIsEditView(false)}>
									<i className="fa fa-times"></i>
								</Button>
							</div>
						</div>
						<FormGroup className="float-right mr-4" style={{ width: "100px" }}>
							<Label for="taskPriority">Priority</Label>
							<Input
								type="select"
								name="priority"
								id="taskPriority"
								value={formData.priority}
								onChange={handleChange}
							>
								<option value="low">Low</option>
								<option value="normal">Normal</option>
								<option value="high">High</option>
							</Input>
						</FormGroup>
						<div className="mt-2 p-4">
							<Input
								type="textarea"
								name="description"
								id="taskDescription"
								placeholder="description for your task.."
								style={{ minHeight: "150px", whiteSpace: "pre-wrap" }}
								value={formData.description}
								onChange={handleChange}
							/>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default TaskItem;
