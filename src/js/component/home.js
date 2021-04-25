import React from "react";
import { Header } from "./header.js";
import { TodoList } from "./todoList.js";

//create your first component
export const Home = () => {
	return (
		<div>
			<Header />
			<TodoList />
		</div>
	);
};
