import express from "express";
import { getUsers } from "../controllers/UserController";

const appRoutes = express.Router();

appRoutes.get("/api/users", (req, res) => {
	const { page, searchText } = req.query;
	return res.send(getUsers(parseInt(page as string), searchText as string));
});

export default appRoutes;
