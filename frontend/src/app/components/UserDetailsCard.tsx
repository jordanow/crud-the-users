import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IUser } from "../../../../types/User";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	title: {
		fontSize: 14,
	},
	subTitle: {
		fontSize: 16,
	},
});

type Props = {
	user: IUser;
};

export default function UserDetailsCard(props: Props) {
	const classes = useStyles();
	const { user } = props;

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography className={classes.title} color="textPrimary" gutterBottom>
					{user.firstName} {user.lastName}
				</Typography>
				<Typography
					className={classes.subTitle}
					color="textSecondary"
					gutterBottom
				>
					{user.userStatus}
				</Typography>
				<Typography
					className={classes.subTitle}
					color="textSecondary"
					gutterBottom
				>
					{user.email}
				</Typography>
			</CardContent>
			<CardActions>
				<Button variant="contained" color="secondary" size="small">Edit</Button>
			</CardActions>
		</Card>
	);
}
