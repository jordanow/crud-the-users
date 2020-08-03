import React from "react";
import Container from "@material-ui/core/Container";

import Header from "./components/Header";
import UserList from "./containers/UserList";

export default function App() {
	return (
		<Container maxWidth="lg">
			<Header />
			<UserList />
		</Container>
	);
}
