import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	return (
		<div className="w-1/2 m-auto">
			{todos.map((todo) => (
				<li
					key={todo.id}
					className="flex p-3 m-1 bg-black text-white rounded-md w-full justify-between align-middle"
				>
					{todo.text}
					<button
						className="bg-cyan-900 p-2 rounded-xl h-10"
						onClick={() => dispatch(removeTodo(todo.id))}
					>
						X
					</button>
				</li>
			))}
		</div>
	);
};

export default Todos;
