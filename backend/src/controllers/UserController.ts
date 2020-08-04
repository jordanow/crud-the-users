import { IUser } from "../../../types/User";
import dbService from "../services/db";

const USERS_LIMIT = 10;

const SEARCHABLE_FIELDS = ["userStatus", "firstName", "lastName", "email"];

// Case insensitive search
// Searches on all available fields
export const searchForProperties = (
	user: IUser,
	searchText: string = ""
): boolean => {
	let found = false;

	const searchTerm = searchText.toUpperCase();

	SEARCHABLE_FIELDS.forEach((key) => {
		const fieldValue: string = (user as any)[key];
		if (fieldValue && fieldValue.toUpperCase().indexOf(searchTerm) > -1) {
			found = true;
			return;
		}
	});
	return found;
};

export const getUsers = (page: number = 1, searchText: string = "") => {
	const users = dbService.getUsers();

	var filteredUsers = users.filter((user) =>
		searchForProperties(user, searchText)
	);

	const startPage = page > 1 ? page * USERS_LIMIT : 0;
	if (startPage + USERS_LIMIT < filteredUsers.length) {
		filteredUsers = filteredUsers.splice(startPage, USERS_LIMIT);
	}

	return {
		users: filteredUsers,
	};
};

export const updateUserByUsername = (username: string, user: IUser) => {
	const updatedUser = dbService.updateUserByUsername(username, user);
	return {
		user: updatedUser,
	};
};

export const createUser = (user: IUser) => {
	return dbService.createUser(user);
};

export const createUsersWithArray = (users: IUser[]) => {
	const createdUsers = users.map(dbService.createUser);
	return { users: createdUsers };
};

// TBD
export const loginUser = (user: IUser, password: string) => {
	// Use a library like bcrypt to generate a hash for incoming password and
	// then compare it with the hashed version of the password in db
};

// TBD
export const logoutUser = (username: string) => {};

export const getUserByUsername = (username: string) => {
	return dbService.getUserByUsername(username);
};

export const deleteUserByUsername = (username: string) => {
	return dbService.deleteUserByUsername(username);
};
