import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
	const [language, setLanguages] = useState([]);

	useEffect(() => {
		axios
			.get("/api/language")
			.then((res) => {
				setLanguages(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	});

	return (
		<div>
			<h1>Connect React with Backend</h1>
			<p>Language : {language.length}</p>
			{language.map((language) => (
				<div key={language.id} style={{display:"flex"}}>
					<h3>{language.name}</h3>
					<p>{language.place}</p>
				</div>
			))}
		</div>
	);
};

export default App;
