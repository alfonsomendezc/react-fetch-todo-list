import React from "react";
import PropTypes from "prop-types";

export const TaskNumber = (props) => {
	return (
		<>
			<div className="tasksNumber">{props.tasksNumber} tasks left!</div>
		</>
	);
};

TaskNumber.propTypes = {
	tasksNumber: PropTypes.number,
};
