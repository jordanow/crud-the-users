import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Header from "./containers/Header";

export default function App() {
	return (
		<Container maxWidth="sm">
			<Box my={4}>
				<Header />
			</Box>
		</Container>
	);
}
