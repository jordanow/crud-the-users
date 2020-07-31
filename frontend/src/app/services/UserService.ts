import axios from "axios";
import { IUserListResponse, IUser } from "../types/User";

const getUsers = async (): Promise<IUserListResponse> => {
	try {
		const response = await axios.get("/api/users");
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const searchForProperties = (
	user: IUser,
	searchText: string = ""
): boolean => {
	const keys: string[] = Object.keys(user);
	let found = false;

	const searchTerm = searchText.toUpperCase();

	keys.forEach((key) => {
		const fieldValue = (user as any)[key];
		if (
			fieldValue &&
			typeof fieldValue === "string" &&
			fieldValue.toUpperCase().indexOf(searchTerm) > -1
		) {
			found = true;
			return;
		}
	});
	return found;
};

const filterUsers = async (searchQuery: string): Promise<IUser[]> => {
	try {
		const { users } = await getUsers();

		return users.filter((user) => searchForProperties(user, searchQuery));
	} catch (error) {
		console.error(error);
		throw error;
	}
};
export { getUsers, filterUsers };
