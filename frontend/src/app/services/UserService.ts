import axios from "axios";
import { IUserListResponse } from "../../../../types/User";

const getUsers = async (
	page: number = 1,
	searchText: string = ""
): Promise<IUserListResponse> => {
	try {
		const response = await axios.get(`/api/users?page=${page}&searchText=${searchText}`);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export { getUsers };
