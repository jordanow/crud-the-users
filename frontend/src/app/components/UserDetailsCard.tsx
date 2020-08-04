import React, { useState, FormEvent, ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
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

type UserDetailsCardProps = {
	user: IUser;
  onSubmitUserDetailsForm: (user: IUser) => void;
  onDeleteUser: (username: string) => void;
};

export default function UserDetailsCard(props: UserDetailsCardProps) {
	const classes = useStyles();
	const [editMode, setEditMode] = useState<boolean>(false);
	const [user, setUserDetails] = useState<IUser>(props.user);

	const showEditUserForm = () => {
		if (editMode) {
			setUserDetails(props.user);
		}
		setEditMode(!editMode);
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		props.onSubmitUserDetailsForm(user);
		setEditMode(false);
  };
  
  const deleteUser = () => {
    props.onDeleteUser(user.username);
		setEditMode(false);
  }

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUserDetails({
			...user,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography>{user.userStatus}</Typography>
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
							disabled={!editMode}
							onChange={handleChange}
						/>
						<TextField
							className={classes.field}
							id={`lastName-${user.lastName}`}
							label="LastName"
							variant="standard"
							name="lastName"
							value={user.lastName}
							disabled={!editMode}
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
							disabled={!editMode}
						/>
						<Box my={2}>
							{editMode ? (
								<Grid container justify="space-between">
									<Button variant="contained" color="primary" type="submit">
										Submit
									</Button>
									<Button variant="outlined" onClick={deleteUser}>
										Delete
									</Button>
								</Grid>
							) : (
								<Box my={5} />
							)}
						</Box>
					</Grid>
				</form>
			</CardContent>

			<CardActions>
				<Grid container>
					<Button
						variant="contained"
						size="small"
						onClick={showEditUserForm}
						color={editMode ? "secondary" : "default"}
					>
						{editMode ? "Cancel" : "Edit"}
					</Button>
				</Grid>
			</CardActions>
		</Card>
	);
}
