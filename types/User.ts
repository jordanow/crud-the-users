export type IUserSearchParams = {
	page: number;
	filterText: string;
};

export type IUser = {
	firstName: string;
	lastName: string;
	email: string;
	userStatus: string;
};

export type IUserListResponse = {
	users: IUser[];
};
