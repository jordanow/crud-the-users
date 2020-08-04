import React, { useEffect, useState, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Pagination from "@material-ui/lab/Pagination";
import { getUsers, updateUserByUserName } from "../services/UserService";
import UserDetailsCard from "../components/UserDetailsCard";
import { AppReducer, initialAppState } from "../reducers/App";
import { FETCH_USERS, SET_USERS, UPDATE_USER } from "../reducers/App/constants";
import SearchBar from "../components/SearchBar";
import { IUser } from "../../../../types/User";

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
	const [searchText, setSearchText] = useState<string>("");

	const [state, dispatch] = useReducer(AppReducer, initialAppState);

	useEffect(() => {
		const fetchUsers = async () => {
			dispatch({ type: FETCH_USERS });
			const data = await getUsers(currentPage, searchText);
			dispatch({ type: SET_USERS, users: data.users });
		};

		fetchUsers();
	}, [searchText, currentPage]);

	const handleChangePage = (event: any, newPage: number) => {
		setCurrentPage(newPage);
	};

	const onSubmitUserDetailsForm = (user: IUser) => {
		dispatch({ type: UPDATE_USER, user });

		const updateUser = async () => {
      await updateUserByUserName(user.username, user);
		};

		updateUser();
	};

	return (
		<Grid container className={classes.root} spacing={2}>
			<Grid item xs={12}>
				<Box my={2}>
					<Grid container justify="center">
						<SearchBar onChangeSearchInput={setSearchText} />
					</Grid>
				</Box>

				<Grid container justify="center" spacing={2}>
					{state.users.map((value) => (
						<Grid key={value.email} item>
							<UserDetailsCard
								user={value}
								onSubmitUserDetailsForm={onSubmitUserDetailsForm}
							/>
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
