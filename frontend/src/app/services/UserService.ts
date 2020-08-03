import axios from "axios";
import { IUserListResponse, IUser } from "../../../../types/User";

const getUsers = async (
	page: number = 1,
	searchText: string = ""
): Promise<IUserListResponse> => {
	try {
		const response = await axios.get(
			`/api/users?page=${page}&searchText=${searchText}`
		);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

const updateUserById = async (id: number, user: IUser): Promise<IUser> => {
	try {
		const response = await axios.post(`/api/user/${user.id}`, {
			user,
		});
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export { getUsers, updateUserById };
