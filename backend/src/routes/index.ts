import express from "express";
import { getUsers } from "../controllers/UserController";

const appRoutes = express.Router();

appRoutes.get("/api/users", (req, res) => {
	const { page, filterText } = req.query;
	return res.send(getUsers(parseInt(page as string), filterText as string));
});

export default appRoutes;
