export type IUser = {
  id: number;
	firstName: string;
	lastName: string;
	email: string;
	userStatus: string;
};

export type IUserListResponse = {
	users: IUser[];
};
