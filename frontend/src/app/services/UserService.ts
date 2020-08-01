import axios from "axios";
import { IUserListResponse } from "../../../../types/User";

const getUsers = async (page: number = 1): Promise<IUserListResponse> => {
	try {
		const response = await axios.get(`/api/users?page=${page}`);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export { getUsers };
