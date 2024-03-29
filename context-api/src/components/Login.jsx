import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
	const [password, setpassword] = useState("");
	const [username, setusername] = useState("");

	const { user, setuser } = useContext(UserContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		setuser({ username, password });
	};

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
			<input
				type="text"
				placeholder="username"
				value={username}
				onChange={(e) => {
					setusername(e.target.value);
				}}
			/>
			<input
				type="text"
				placeholder="password"
				value={password}
				onChange={(e) => {
					setpassword(e.target.value);
				}}
			/>
			<button type="submit" onClick={handleSubmit}>
				Submit
			</button>
		</div>
	);
}

export default Login;
