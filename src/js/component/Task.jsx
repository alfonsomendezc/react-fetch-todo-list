import React from "react";
import PropTypes from "prop-types";

export const Task = (props) => {
	return (
		<>
			<div className="tasks">
				- {props.newTask}
				<i
					className="fa-solid fa-square-xmark"
					onClick={() => props.removeTask(props.position)}></i>
			</div>
		</>
	);
};

Task.propTypes = {
	newTask: PropTypes.string,
	removeTask: PropTypes.string,
	position: PropTypes.number,
};
