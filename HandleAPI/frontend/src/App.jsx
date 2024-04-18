import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
	const [products, setproducts] = useState([]);
	const [error, seterror] = useState(false);
	const [loading, setloading] = useState(false);
	const [search, setSearch] = useState("");
	useEffect(() => {
		const controller = new AbortController();
		(async () => {
			try {
				seterror(false);
				const response = await axios.get(`/api/products?search=${search}`, {
					signal: controller.signal,
				});
				console.log(response.data);
				setproducts(response.data);
				setloading(false);
			} catch (error) {
				if (axios.isCancel(error)) {
					console.log("Request  canceled", error.message);
				}
				seterror(true);
				setloading(false);
			}
		})();
		return () => {
			controller.abort();
		};
	}, [search]);
	return (
		<div>
			<h1>Chai aur react</h1>
			<input
				type="text"
				placeholder="search"
				onChange={(e) => {
					setSearch(e.target.value);
				}}
			/>
			<h2>Number of products are :{products.length}</h2>
		</div>
	);
};

export default App;

// const CustomReactQuery = (urlPath) => {
// 	return [products, loading, error];
// };
