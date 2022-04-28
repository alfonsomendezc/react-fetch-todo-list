import React from "react";
import { ToDoList } from "./ToDoList.jsx";

const Home = () => {
	return (
		<>
			<div className="title">TO-DO LIST</div>
			<div className="container-fluid">
				<ToDoList />
			</div>
		</>
	);
};

export default Home;
