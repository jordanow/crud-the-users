import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Header from "./components/Header";
import UserList from "./containers/UserList";

export default function App() {
	return (
		<Container maxWidth="sm">
			<Box my={4}>
				<Header />
			</Box>
      <Box my={8}>
      <UserList />
      </Box>
		</Container>
	);
}
