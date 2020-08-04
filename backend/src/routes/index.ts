import express from "express";
import {
	getUsers,
	updateUserByUsername,
	createUser,
	createUsersWithArray,
	loginUser,
	logoutUser,
	getUserByUsername,
	deleteUserByUsername,
} from "../controllers/UserController";

const appRoutes = express.Router();

// Get list of users
appRoutes.get("/users", (req, res) => {
	const { page, searchText } = req.query;
	return res.send(getUsers(parseInt(page as string), searchText as string));
});

// Create user
appRoutes.post("/user", (req, res) => {
	return res.send(createUser(req.body.user));
});

// Create list of users
appRoutes.post("/user/createWithArray", (req, res) => {
	return res.send(createUsersWithArray(req.body.users));
});

// Login user
appRoutes.get("/user/login", (req, res) => {
	return res.send(loginUser(req.body.username, req.body.password));
});

// Logut user
appRoutes.get("/user/logout", (req, res) => {
	return res.send(logoutUser(req.body.username));
});

// Get user by username
appRoutes.get("/user/:username", (req, res) => {
	return res.send(getUserByUsername(req.params.username));
});

// Update user by username
appRoutes.put("/user/:username", (req, res) => {
	return res.send(updateUserByUsername(req.params.username, req.body.user));
});

// Delete user by username
appRoutes.delete("/user/:username", (req, res) => {
	return res.send(deleteUserByUsername(req.params.username));
});

export default appRoutes;
