import allUsers from "../data/users.json";
import { IUser } from "../../../types/User";

const ALLOWED_FIELDS = [
	"userStatus",
	"firstName",
	"lastName",
	"email",
	"id",
	"username",
	"phone",
];

export const getSafeUserObject = (
	user: any,
	ALLOWED_FIELDS: string[]
): IUser => {
	var safeUserObj = {};

	ALLOWED_FIELDS.forEach((key) => {
		const fieldValue: string = (user as any)[key];
		(safeUserObj as any)[key] = fieldValue;
	});
	return safeUserObj as IUser;
};

class DBService {
	users: IUser[] = [];

	constructor(ALLOWED_FIELDS: string[]) {
		this.users = allUsers.map((user) =>
			getSafeUserObject(user, ALLOWED_FIELDS)
		);
	}

	public getUsers(): IUser[] {
		return this.users;
	}

	public updateUserByUsername(username: string, updatedUser: IUser): IUser {
		this.users = this.users.map(
			(user): IUser => {
				if (user.username === username) {
					var safelyUpdatedUser = {};

					ALLOWED_FIELDS.forEach((key) => {
						const fieldValue: string = (updatedUser as any)[key];
						(safelyUpdatedUser as any)[key] = fieldValue;
					});

					console.log(safelyUpdatedUser);

					return safelyUpdatedUser as IUser;
				}
				return user;
			}
		);

		return updatedUser;
	}

	public createUser(user: Partial<IUser>): IUser {
		const newUser: IUser = Object.create(user);
		newUser.id = Date.now();

		this.users.push(newUser);

		return newUser;
	}

	public getUserByUsername(username: string): IUser | null {
		return this.users.reduce((target: IUser | null, user: IUser) => {
			if (user.username === username) {
				return user;
			}
			return target;
		}, null);
	}

	public deleteUserByUsername(username: string): void {
		this.users = this.users.filter((user) => user.username !== username);
	}
}

const dbService = new DBService(ALLOWED_FIELDS);
export default dbService;
