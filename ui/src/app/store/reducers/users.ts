import { ActionPayload } from './../../interfaces/ActionPayload';
import { UserData } from './../../models/Shared/UserData';
import { UserConstants } from '../constants/user';

export type IUserState = {
    userData: UserData;
    isAdmin: boolean;
    isLoggedIn: boolean;
    error: string;
    isLoading: boolean;

};

const initialState: IUserState = {
    userData: void 0,
    error: void 0,
    isAdmin: true,
    isLoggedIn: false, // CHANGE IT IF IT NEEDED
    isLoading: false,
};

export function userReducer(state = initialState, action: ActionPayload<any>): IUserState {
    switch (action.type) {
        case UserConstants.FETCH_USER: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case UserConstants.FETCH_USER_OK: {
            return {
                ...state,
                userData: action.payload,
                isLoggedIn: true,
                isLoading: initialState.isLoading,
            };
        }
        case UserConstants.FETCH_USER_FAIL: {
            return {
                ...state,
                isLoading: initialState.isLoading,
                error: action.payload,
            };
        }
        case UserConstants.CLEAR: {
            return {
                ...state,
                isLoading: initialState.isLoading,
                error: initialState.error,
            };
        }
        default:
            return {
                ...state,
            };
    }
}
