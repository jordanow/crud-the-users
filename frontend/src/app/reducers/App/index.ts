import { IUser } from "../../../../../types/User";
import {
	FETCH_USERS,
	SET_USERS,
	UPDATE_USER,
	FILTER_USERS,
	DELETE_USER,
} from "./constants";

type IAppState = {
	users: IUser[];
	isFetching: boolean;
	searchText?: string;
};

type Action =
	| { type: typeof FETCH_USERS }
	| { type: typeof SET_USERS; users: IUser[] }
	| { type: typeof DELETE_USER; username: string }
	| { type: typeof UPDATE_USER; user: IUser }
	| { type: typeof FILTER_USERS; searchText: string };

export const initialAppState: IAppState = {
	users: [],
	isFetching: false,
	searchText: undefined,
};

export function AppReducer(
	state: IAppState = initialAppState,
	action: Action
): IAppState {
	switch (action.type) {
		case FETCH_USERS:
			return {
				...state,
				isFetching: true,
			};

		case SET_USERS:
			return {
				...state,
				users: action.users,
				isFetching: false,
			};

		case UPDATE_USER: {
			const users = state.users;
			state.users.map((user) => {
				if (user.id === action.user.id) {
					user = {
						...action.user,
					};
				}
				return user;
			});

			return {
				...state,
				users,
				isFetching: false,
			};
		}

		case DELETE_USER: {
			const users = state.users.filter(
				(user) => user.username !== action.username
			);
			return {
				...state,
				users,
			};
		}

		case FILTER_USERS:
			return {
				...state,
				searchText: action.searchText,
			};

		default:
			return state;
	}
}
