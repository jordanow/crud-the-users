import React, { useEffect, useState, useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Pagination from "@material-ui/lab/Pagination";
import {
	getUsers,
	updateUserByUserName,
	deleteUserByUserName,
  createNewUser,
} from "../services/UserService";
import UserDetailsCard from "../components/UserDetailsCard";
import { AppReducer, initialAppState } from "../reducers/App";
import {
	FETCH_USERS,
	SET_USERS,
	UPDATE_USER,
	DELETE_USER,
} from "../reducers/App/constants";
import SearchBar from "../components/SearchBar";
import { IUser } from "../../../../types/User";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import CreateNewUserModal from "../components/CreateNewUserModal";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	control: {
		padding: theme.spacing(2),
	},
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

export default function UserList() {
	const classes = useStyles();
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [searchText, setSearchText] = useState<string>("");
  const [newUserModalVisible, setNewUserModalVisibility] = useState(false);
  const [modalStyle] = useState(getModalStyle);

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

	const onDeleteUser = (username: string) => {
		dispatch({ type: DELETE_USER, username });
		deleteUserByUserName(username);
	};

	const toggleNewUserModalVisibility = () => {
		setNewUserModalVisibility(!newUserModalVisible);
	};

	const onCreateNewUser = (user: Partial<IUser>) => {
    console.log(user);
    toggleNewUserModalVisibility();
    createNewUser(user);
    // To trigger page refresh
    setCurrentPage(1);
	};

	return (
		<Grid container className={classes.root} spacing={2}>
			<Grid item xs={12}>
				<Box my={2}>
					<Grid container justify="center">
						<SearchBar onChangeSearchInput={setSearchText} />
					</Grid>
				</Box>

				<Grid container justify="flex-end">
					<Button
						variant="contained"
						color="secondary"
						onClick={toggleNewUserModalVisibility}
					>
						Add new user
					</Button>
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

				<Grid container justify="center" spacing={2}>
					{state.users.map((value) => (
						<Grid key={value.email} item>
							<UserDetailsCard
								user={value}
								onSubmitUserDetailsForm={onSubmitUserDetailsForm}
								onDeleteUser={onDeleteUser}
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

			<Modal
				open={newUserModalVisible}
				onClose={toggleNewUserModalVisibility}
				aria-labelledby="create-new-user"
				aria-describedby="create-new-user"
			>
				<div style={modalStyle} className={classes.paper}>
					<CreateNewUserModal onCreateNewUser={onCreateNewUser} />
				</div>
			</Modal>
		</Grid>
	);
}
