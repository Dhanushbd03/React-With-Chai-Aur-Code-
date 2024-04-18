import express from "express";

const app = express();

// app.get("/", (req, res) => {
// 	res.send("Server is ready ");
// });

//get a list of 5 Jokes
app.get("/api/language", (req, res) => {
	const Language = [
		{ id: 1, name: "English", place: "USA" },
		{ id: 2, name: "Kannada", place: "Karnataka" },
		{ id: 3, name: "Hindi", place: "north" },
		{ id: 4, name: "Tamil", place: "Tamil Nadu" },
		{ id: 5, name: "Malayalam", place: "Kerala" },
	];
	res.send(Language);
});

const port = process.env.port || 3000;

app.listen(port, () => {
	console.log(`server running at http://localhost:${port}`);
});
