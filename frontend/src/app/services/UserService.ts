import axios from "axios";
import { IUserListResponse } from "../types/User";

const getUsers = async (): Promise<IUserListResponse> => {
	try {
		const response = await axios.get("/api/users");
		return response.data;
	} catch (error) {
    console.error(error);
		throw error;
	}
};

export { getUsers };
