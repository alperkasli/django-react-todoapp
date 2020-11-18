import React from "react";
import { Badge } from "reactstrap";
import TopNavbar from "../components/Navbar";
import TaskList from "../components/TaskList";

function SharedTasks() {
	return (
		<div className="container">
			<TopNavbar />
			<div className="card mt-4">
				<div className="card-header d-flex">
					<h2 className="text-primary">
						<Badge color="" pill>
							<i className="fa fa-tasks"></i>
						</Badge>
						Shared Tasks From Other Users
					</h2>
				</div>
				<div className="card-body m-0 p-0">
					<TaskList 
                        sharedTasksView={true}
                    />
				</div>
			</div>
		</div>
	);
}
export default SharedTasks
