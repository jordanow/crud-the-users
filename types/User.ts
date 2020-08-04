export enum UserStatus {
  ACTIVE,
  INACTIVE
}

export type IUser = {
  id: number;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	userStatus: UserStatus;
	phone: string;
};

export type IUserListResponse = {
	users: IUser[];
};
