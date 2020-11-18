import React, { useState } from "react";
import { connect } from "react-redux";
import {
	Button,
	Card,
	CardBody,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	ListGroup,
	ListGroupItem,
	Popover,
	Spinner,
} from "reactstrap";
import { todoApis } from "../api/Todos";

const ShareTaskPopover = ({ taskId, ...props }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);
	const [fetching, setFetching] = useState("idle");
	const [filteredUsers, setFilteredUsers] = useState(props.allUsers);
	const [userFilter, setUserFilter] = useState("");

	const togglePopover = () => setIsOpen(!isOpen);

	const handleSelectUser = (userId) => {
		setSelectedUser(userId);
	};

	const handleShareTask = () => {
		setFetching("loading");
		todoApis
			.shareTask({
				taskId,
				taskToId: selectedUser,
			})
			.then((res) => {
				console.log(res);
				togglePopover();
				setFetching("success");
			})
			.catch((err) => {
				console.log(err);
				setFetching("error");
			});
	};

	const handleFilterChange = (e) => {
		let filterText = e.target.value;
		const filtered = props.allUsers.filter((user) => {
			const searchCheck =
				user.username.toLowerCase().includes(filterText.toLowerCase()) ||
				filterText === "";
			return searchCheck;
		});
		setFilteredUsers(filtered);
		setUserFilter(filterText);
	};
	return (
		<>
			<Button id={"sharePopover" + taskId} color="info" onClick={togglePopover}>
				<i className="fa fa-share"></i> Share
			</Button>
			<Popover
				target={"#sharePopover" + taskId}
				isOpen={isOpen}
				placement="bottom"
				toggle={togglePopover}
				trigger="legacy"
			>
				<Card style={{ width: "300px" }}>
					<CardBody>
						<div className="mb-2">
							<h5>Select User: </h5>
							<InputGroup className="mb-2">
								<InputGroupAddon addonType="prepend">
									<InputGroupText>
										<i className="fa fa-search text-info"></i>
									</InputGroupText>
								</InputGroupAddon>
								<Input
									onChange={handleFilterChange}
									value={userFilter}
									placeholder="find username.."
									name="userFilterInput"
								/>
							</InputGroup>
							<ListGroup style={{ maxHeight: "300px", overflow: "scroll" }}>
								{filteredUsers.map((user) => (
									<ListGroupItem
										key={"user" + user.id}
										action
										onClick={() => handleSelectUser(user.id)}
										color={selectedUser === user.id ? "primary" : ""}
									>
										{user.username}
									</ListGroupItem>
								))}
							</ListGroup>
						</div>
						<Button
							disabled={fetching === "loading"}
							color="success"
							onClick={handleShareTask}
						>
							{fetching === "loading" ? (
								<Spinner color="white" />
							) : (
								<span>Share</span>
							)}
						</Button>
					</CardBody>
				</Card>
			</Popover>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		allUsers: state.allUsers,
	};
};

export default connect(mapStateToProps)(ShareTaskPopover);
