import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { todoApis } from "../api/Todos";
import TaskCategories from "./TaskCategories";

const TaskForm = ({ submitCallback }) => {
	const [formData, setFormData] = useState({
		title: "",
		priority: "normal",
		description: "",
		category_id: "",
	});
	const [categoryError, setCategoryError] = useState(false)

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
		if(formData.category_id === ''){
			setCategoryError(true)
		}
		console.log(formData);
		todoApis.addTodo(formData).then((res) => {
			setFormData({
				title: "",
				priority: "normal",
				description: "",
				category_id: "",
			});
			setCategoryError(false)
			submitCallback();
			console.log(res);
		});
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup>
				<Label for="taskTitle">Title</Label>
				<Input
					type="text"
					name="title"
					id="taskTitle"
					placeholder="title.."
					value={formData.title}
					onChange={handleChange}
					required
				/>
			</FormGroup>
			<Row form>
				<Col md={6}>
					<FormGroup>
						<TaskCategories handleCategorySelect={setFormData} />
						{!categoryError && <FormFeedback className="d-block" color="danger">Please select category first.</FormFeedback>}
					</FormGroup>
				</Col>
				<Col md={6}>
					<FormGroup>
						<Label for="taskPriority">Priority</Label>
						<Input
							type="select"
							name="priority"
							id="taskPriority"
							value={formData.priority}
							onChange={handleChange}
							required
						>
							<option value="low">Low</option>
							<option value="normal">Normal</option>
							<option value="high">High</option>
						</Input>
					</FormGroup>
				</Col>
			</Row>
			<FormGroup>
				<Label for="taskDescription">Description</Label>
				<Input
					type="textarea"
					name="description"
					id="taskDescription"
					placeholder="description for your task.."
					style={{ minHeight: "150px", whiteSpace: "pre-wrap" }}
					value={formData.description}
					onChange={handleChange}
					required
				/>
			</FormGroup>
			<Button color="primary">Save</Button>
		</Form>
	);
};

export default TaskForm;
