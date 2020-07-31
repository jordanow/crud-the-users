import fs from "fs";
import express from "express";

import users from "../data/users.json";

const appRoutes = express.Router();

appRoutes.get("/users", (req, res) => {
	return res.send({
		users,
	});
});

export default appRoutes;
