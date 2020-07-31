export interface IUser {
	name: string;
	age: number;
	balance: number;
	company: string;
	email: string;
	gender: string;
}

export interface IUserListResponse {
	users: IUser[];
}
