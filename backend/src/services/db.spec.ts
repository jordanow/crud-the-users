import dbService from "./db";
import { UserStatus } from "../../../types/User";

test("DB should return user when fetched using valid username", () => {
	const user = dbService.getUserByUsername("non,");

	expect(user).not.toBeNull();
});

test("DB should return null user when fetched using invalid username", () => {
	const user = dbService.getUserByUsername("dfkjdkfjkdjf,");

	expect(user).toBeNull();
});

test("DB should create a new inactive user", () => {
	const sampleUser = { firstName: "test", lastName: "complete" };
	const createdUser = dbService.createUser(sampleUser);

	expect(createdUser.userStatus).toBe(UserStatus.INACTIVE);
	expect(createdUser.username).toBe("test-complete");
});
