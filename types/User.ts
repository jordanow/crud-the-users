export type IUserSearchParams = {
	page: number;
	filterText: string;
};

export interface IUser {
	firstName: string;
	lastName: string;
	email: string;
	userStatus: string;
}

export interface IUserListResponse {
	users: IUser[];
}
