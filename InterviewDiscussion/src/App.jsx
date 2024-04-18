import React, { useState } from "react";

const App = () => {
	const [mainValue, setValue] = useState(1);
	// full component will be re- rendered when a state changes
	let Multiplied = mainValue * 5;
	const multipleby5 = () => {
		setValue(Multiplied);
	};
	return (
		<div>
			<h1>Main Value :{mainValue}</h1>
			<button onClick={multipleby5}>Click to multiple by 5</button>
			<h2>Multiplied Value :{Multiplied} </h2>
		</div>
	);
};

export default App;
