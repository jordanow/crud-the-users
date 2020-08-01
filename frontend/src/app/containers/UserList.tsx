import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Pagination from "@material-ui/lab/Pagination";
import { getUsers } from "../services/UserService";
import { IUser } from "../types/User";
import UserDetailsCard from "../components/UserDetailsCard";

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
	const [users, setUsers] = useState<IUser[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);

	useEffect(() => {
		const users = async () => {
			const data = await getUsers();
			setUsers(data.users);
		};

		users();
	}, []);

	const handleChangePage = (event: any, newPage: number) => {
		setCurrentPage(newPage);
	};

	return (
		<Grid container className={classes.root} spacing={2}>
			<Grid item xs={12}>
				<Grid container justify="center" spacing={2}>
					{users.map((value) => (
						<Grid key={value.email} item>
							<UserDetailsCard user={value} />
						</Grid>
					))}
				</Grid>
				<Box my={4}>
					<Grid container justify="center">
						<Pagination
							count={4}
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
