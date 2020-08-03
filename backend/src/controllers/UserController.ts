import users from "../data/users.json";
import { IUser } from "../../../types/User";

const USERS_LIMIT = 10;

// Case insensitive search
export const searchForProperties = (
	user: IUser,
	searchText: string = ""
): boolean => {
	const keys: string[] = Object.keys(user);
	let found = false;

	const searchTerm = searchText.toUpperCase();

	keys.forEach((key) => {
		const fieldValue: string = (user as any)[key];
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

export const getUsers = (page: number = 1, searchText: string = "") => {
	var filteredUsers = users.filter((user) =>
		searchForProperties(user, searchText)
	);

	const startPage = page > 1 ? page * USERS_LIMIT : 0;
	if (startPage + USERS_LIMIT <= users.length) {
		filteredUsers = filteredUsers.splice(startPage, USERS_LIMIT);
	}

	return {
		users: filteredUsers,
	};
};
