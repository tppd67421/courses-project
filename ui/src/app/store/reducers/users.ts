import { Action } from 'redux';
import { UserConstants } from '../constants/user';
import { PersonName } from '../../models/Shared/PersonName';

export type IUserState = {
    username: string;
    name: PersonName;
    userId: number;
    isAdmin: boolean;
    isLoggedIn: boolean;
    error: string;
    isLoading: boolean;
};

export interface ActionPayload<T> extends Action {
    payload: T;
}

const initialState: IUserState = {
    username: void 0,
    userId: void 0,
    name: void 0,
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
                username: action.payload.login,
                name: action.payload.name,
                userId: action.payload.id,
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
    }
    return state;
}
