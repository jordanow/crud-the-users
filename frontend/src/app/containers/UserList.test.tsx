import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UserList from "./UserList";

test("renders Add new user button", () => {
	const { getByText } = render(<UserList />);
	const addNewUserButton = getByText(/Add new user/i);
	expect(addNewUserButton).toBeInTheDocument();
});

test("Should open CreateNewUserModal when the add user button is clicked", () => {
	const { getByText } = render(<UserList />);
	const addNewUserButton = getByText(/Add new user/i);

	fireEvent.click(addNewUserButton);

	const createNewUserModal = getByText(/Create new user/i);

	expect(createNewUserModal).toBeInTheDocument();
});

