import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	const addtodoHandler = (e) => {
		e.preventDefault();
		dispatch(addTodo(input));
		setInput("");
	};
	return (
		<form
			className="w-1/2 flex justify-center bg-[#3c87b0] m-auto  rounded-lg"
			onSubmit={addtodoHandler}
		>
			<input
				type="text"
				className="w-3/4 h-min m-3 p-1 rounded-md"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button className="h-min m-3 bg-white p-1 rounded-md " type="submit">
				Add Todo
			</button>
		</form>
	);
}

export default AddTodo;
