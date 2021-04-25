import { object } from "prop-types";
import React, { useState, useEffect } from "react";

export const TodoList = () => {
	const [tasks, setTasks] = useState([]);

	function handledRemove(idTask) {
		const newList = tasks.filter(item => item.id !== idTask);
		setTasks(newList);
	}

	// useEffect(() => {
	// 	//getTasks();
	// }, []);

	return (
		<div className="container d-flex justify-content-center">
			<ul className="todo-card">
				<li className="todo-item">
					<input
						type="text"
						className="form-control"
						aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
						onKeyUp={e =>
							e.key === "Enter" &&
							setTasks(
								tasks.concat({
									id: tasks.length + 1,
									label: e.target.value,
									done: false
								})
							)
						}
					/>
				</li>
				{tasks.length === 0 ? (
					<p>No tasks, add a task please</p>
				) : (
					tasks.map((todo, index) => (
						<li className="todo-item" key={todo.id}>
							<button
								type="button"
								className="close"
								onClick={() => handledRemove(todo.id)}>
								✖
							</button>
							{todo.label}
						</li>
					))
				)}
				<li className="footer">
					<p>{tasks.length} item left</p>
				</li>
			</ul>
		</div>
	);
};
