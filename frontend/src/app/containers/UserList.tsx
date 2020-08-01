import React, { useEffect, useState, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Pagination from "@material-ui/lab/Pagination";
import { getUsers } from "../services/UserService";
import UserDetailsCard from "../components/UserDetailsCard";
import { AppReducer, initialAppState } from "../reducers/App";
import { FETCH_USERS, SET_USERS } from "../reducers/App/constants";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(2),
	},
}));

export default function UserList() {
	const classes = useStyles();
	const [currentPage, setCurrentPage] = useState<number>(1);

	const [state, dispatch] = useReducer(AppReducer, initialAppState);

	useEffect(() => {
		const fetchUsers = async () => {
			dispatch({ type: FETCH_USERS });
			const data = await getUsers(currentPage);
			dispatch({ type: SET_USERS, users: data.users });
		};

		fetchUsers();
	}, [state.searchText, currentPage]);

	const handleChangePage = (event: any, newPage: number) => {
		setCurrentPage(newPage);
	};

	return (
		<Grid container className={classes.root} spacing={2}>
			<Grid item xs={12}>
				<Grid container justify="center" spacing={2}>
					{state.users.map((value) => (
						<Grid key={value.email} item>
							<UserDetailsCard user={value} />
						</Grid>
					))}
				</Grid>
				<Box my={4}>
					<Grid container justify="center">
						<Pagination
							count={9}
							color="primary"
							page={currentPage}
							onChange={handleChangePage}
						/>
					</Grid>
				</Box>
			</Grid>
		</Grid>
	);
}
