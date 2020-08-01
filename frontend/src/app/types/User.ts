export interface IUser {
	firstName: string;
	lastName: string;
	email: string;
	userStatus: string;
}

export interface IUserListResponse {
	users: IUser[];
}
