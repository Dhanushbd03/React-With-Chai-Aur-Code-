import { useContext } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import UserContext from "./context/UserContext";

function App() {
	return (
		<UserContextProvider>
			<Heading />
			<Login />
			<Profile />
		</UserContextProvider>
	);
}

export default App;

function Heading() {
	const { user } = useContext(UserContext);

	return (
		<>
			<h1>{user ? "Welcome " + user.username : "Login"}</h1>
		</>
	);
}
