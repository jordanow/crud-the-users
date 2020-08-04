import axios from "axios";
import { IUserListResponse, IUser } from "../../../../types/User";

const getUsers = async (
	page: number = 1,
	searchText: string = ""
): Promise<IUserListResponse> => {
	try {
		const response = await axios.get(
			`/users?page=${page}&searchText=${searchText}`
		);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

const updateUserByUserName = async (
	username: string,
	user: IUser
): Promise<IUser> => {
	try {
		const response = await axios.put(`/user/${username}`, {
			user,
		});
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export { getUsers, updateUserByUserName };
