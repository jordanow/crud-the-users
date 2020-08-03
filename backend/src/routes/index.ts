import express from "express";
import { getUsers, updateUserById } from "../controllers/UserController";

const appRoutes = express.Router();

appRoutes.get("/api/users", (req, res) => {
	const { page, searchText } = req.query;
	return res.send(getUsers(parseInt(page as string), searchText as string));
});

appRoutes.post("/api/user/:id", (req, res) => {
	return res.send(updateUserById(req.params.id, req.body.user));
});

export default appRoutes;
