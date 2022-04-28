import React from "react";
import { useState } from "react";
import { Task } from "./Task.jsx";
import { TaskNumber } from "./TasksNumber.jsx";

export const ToDoList = () => {
	const [inputValue, setInputValue] = useState("");
	const [tasks, setTasks] = useState([]);
	return (
		<>
			<input
				className="inputT"
				type="text"
				placeholder="Press 'Enter' to add a Task"
				onChange={(e) => setInputValue(e.target.value)}
				onKeyPress={(e) => {
					if (e.key == "Enter") {
						setTasks((prev) => [...prev, inputValue]);
						console.log(tasks);
					}
				}}
			/>
			<div>
				{tasks.map((task, index) => {
					return (
						<Task
							newTask={task}
							key={index}
							position={index}
							removeTask={(removeTask) =>
								setTasks(
									tasks.filter(
										(task, index) => index != removeTask
									)
								)
							}
						/>
					);
				})}
			</div>
			{tasks.length == 0 ? (
				"Good job! No tasks left!"
			) : (
				<TaskNumber tasksNumber={tasks.length} />
			)}
		</>
	);
};
