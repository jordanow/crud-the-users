import React, { useState, FormEvent, ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { IUser } from "../../../../types/User";
import { Grid, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	field: {
		marginTop: "2ch",
	},
});

type CreateNewUserModalProps = {
	onCreateNewUser: (user: Partial<IUser>) => void;
};

export default function CreateNewUserModal(props: CreateNewUserModalProps) {
	const classes = useStyles();
	const [user, setUserDetails] = useState<Partial<IUser>>({
		firstName: "",
		lastName: "",
		email: "",
	});

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		props.onCreateNewUser(user);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUserDetails({
			...user,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography variant="h5">Create new user</Typography>

				<form
					className={classes.root}
					noValidate
					autoComplete="off"
					onSubmit={onSubmit}
				>
					<Grid container direction="column">
						<TextField
							className={classes.field}
							id={`firstName-${user.firstName}`}
							label="FirstName"
							name="firstName"
							variant="standard"
							value={user.firstName}
							onChange={handleChange}
						/>
						<TextField
							className={classes.field}
							id={`lastName-${user.lastName}`}
							label="LastName"
							variant="standard"
							name="lastName"
							value={user.lastName}
							onChange={handleChange}
						/>
						<TextField
							id={`email-${user.email}`}
							className={classes.field}
							label="Email Address"
							variant="standard"
							value={user.email}
							name="email"
							onChange={handleChange}
						/>
					</Grid>

					<Box my={2}>
						<Button variant="contained" color="primary" type="submit">
							Submit
						</Button>
					</Box>
				</form>
			</CardContent>
		</Card>
	);
}
