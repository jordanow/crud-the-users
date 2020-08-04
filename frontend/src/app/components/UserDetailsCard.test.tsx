import React from "react";
import { render } from "@testing-library/react";
import UserDetailsCard from "./UserDetailsCard";
import { IUser, UserStatus } from "../../../../types/User";

const user: IUser = {
	id: 10000,
	username: "non,",
	firstName: "Hilda",
	lastName: "David",
	email: "imperdiet.nec.leo@eu.net",
	phone: "8494-1214",
	userStatus: UserStatus.INACTIVE,
};

const noop = () => {};

test("renders User Details", () => {
	const { getByLabelText } = render(
		<UserDetailsCard
			user={user}
			onSubmitUserDetailsForm={noop}
			onDeleteUser={noop}
		/>
  );
  
	const firstNameField = getByLabelText("FirstName");
	expect((firstNameField as any).value).toBe(user.firstName);

	const lastNameField = getByLabelText("LastName");
	expect((lastNameField as any).value).toBe(user.lastName);

	const EmailField = getByLabelText("Email Address");
	expect((EmailField as any).value).toBe(user.email);
});