import { Action } from 'redux';
import { UserConstants } from '../constants/user';

export type IUserState = {
    username: string;
    isAdmin: boolean;
    isLoggedIn: boolean;
    isLoading: boolean;
};

export interface ActionPayload<T> extends Action {
    payload: T;
}

const initialState: IUserState = {
    username: void 0,
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
                username: action.payload.username,
                isLoggedIn: true,
                isLoading: initialState.isLoading,
            };
        }
        case UserConstants.FETCH_USER_FAIL: {
            return {
                ...state,
                isLoading: initialState.isLoading,
            };
        }
    }
    return state;
}
