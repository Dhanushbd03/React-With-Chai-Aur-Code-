import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
const App = () => {
	return (
		<>
			<h1 className="text-center text-teal-900 text-3xl p-10 font-bold">
				Todo List
			</h1>
			<AddTodo />
			<Todos />
		</>
	);
};

export default App;
