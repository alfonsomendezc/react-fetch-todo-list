import React, { useEffect, useState } from "react";
import { ToDoList } from "./ToDoList.jsx";

const Home = () => {
	const apiUrl =
		"https://assets.breatheco.de/apis/fake/todos/user/alfonsomendezc";

	const [tasks, setTasks] = useState([]);

	//POST - create User
	const createUser = async () => {
		const response = await fetch(apiUrl, {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (response.ok) {
			const body = await response.json();
			console.log(body);
		}
	};

	// GET - get tasks from User
	const getTasks = async () => {
		const response = await fetch(apiUrl);
		if (response.ok) {
			const body = await response.json();
			setTasks(body);
		}
	};

	let newTasks = [
		{ label: "Make the bed", done: false },
		{ label: "Walk the dog", done: false },
		{ label: "Do the replits", done: false },
	];

	// PUT - update tasks from User
	const updateTasks = async (theTasks) => {
		const response = await fetch(apiUrl, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(theTasks),
		});
		if (response.ok) {
			const body = await response.json();
			console.log(body);
			getTasks();
		}
	};

	// DELETE - deletes user with all tasks
	const deleteUser = async () => {
		const response = await fetch(apiUrl, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (response.ok) {
			const body = await response.json();
			console.log(body);
		}
	};

	useEffect(() => {
		// createUser();
		getTasks();
		// deleteUser();
	}, []);

	useEffect(() => {
		if (tasks.length < 3) {
			updateTasks(newTasks);
		}
	}, [tasks]);

	return (
		<>
			<div className="title">TO-DO LIST</div>
			<div className="container-fluid">
				<ToDoList />
			</div>
			<div>
				{tasks.map((task, index) => {
					return (
						<p key={index}>
							{task.label} {task.done == true ? "true" : "false"}
						</p>
					);
				})}
			</div>
		</>
	);
};

export default Home;
